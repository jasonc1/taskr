//purposely made WITHOUT jquery. therefore, not going to add animations

var tasks = 0;

//functions
var addTask = function(){
  var task = document.getElementById("task").value;
  var date = document.getElementById("dueDate").value;
  var person = document.getElementById("assignPerson").value;
  if(task ==""){//tasks will only be added if there is SOMETHING in the input
    alert("task cannot be empty");
    clearInputs();
    return
  }
  if(date == ""){//date can be optional
    date = "none";
  }
  if(person == ""){
    person = "none";
  }
  createListElement(task, date, person);
  clearInputs();

}

var enter = function(e){
  if(e.which == 13){
    addTask();
  }
}

var clearInputs = function(){//"resets" input boxes
  document.getElementById("task").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("assignPerson").value = "";
}


var completeTask = function(e){
  // console.log("completing...");
  //create copy
  var temp = e.parentNode.cloneNode(true);
  //"cross through means done"
  console.log(temp);
  temp.style.opacity = 0;
  temp.childNodes[1].setAttribute("style", "text-decoration: line-through; margin-left: 0;");
  temp.childNodes[0].setAttribute("class", "box-fill");
  //append to bottom.
  e.parentNode.parentNode.appendChild(temp);
  setTimeout(function(){temp.style.opacity = 1;}, 0);

  deleteTask(e);
}

var deleteTask = function(e){
  //deletes the task...
  e.parentNode.style.opacity = 0;
  setTimeout(function(){e.parentNode.parentNode.removeChild(e.parentNode);}, 500);

}

var createListElement = function(taskdata, date, name){//creates a new row, for a task...
  tasks++;
  var task = document.createElement("div");
  task.setAttribute("class", "row task");
  task.setAttribute("id", "tasks " + tasks);

  var box = document.createElement("a");//box to mark as completed
  box.setAttribute("class", "box");
  box.setAttribute("onclick", "completeTask(this)");

  var text = document.createElement("div");//actual task
  text.appendChild(document.createTextNode(taskdata));
  text.setAttribute("class", "seven columns");
  text.setAttribute("style", "margin-left: 0;");

  var due = document.createElement("div");// shows date due
  due.appendChild(document.createTextNode(date));
  due.setAttribute("class", "two columns");

  var person = document.createElement("div");
  person.appendChild(document.createTextNode(name));
  person.setAttribute("class", "two columns");

  var del = document.createElement("a");//to delete task
  del.setAttribute("class", "del");
  del.appendChild(document.createTextNode("X"));
  del.setAttribute("onclick", "deleteTask(this)");

  task.appendChild(box);
  task.appendChild(text);
  task.appendChild(due);
  task.appendChild(person);
  task.appendChild(del);


  document.querySelector("#results").insertBefore(task, document.querySelector("#results").firstChild);
  setTimeout(function(){document.getElementById("tasks " + tasks).style.opacity = 1;}, 0);

}

//jquery stuff
$( function() {
  console.log("ready");
  $("#dueDate").datepicker({
    inline: true,
      showOtherMonths: true,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    });
});