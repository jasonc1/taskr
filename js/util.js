//purposely made WITHOUT jquery. therefore, not going to add animations

var tasks = 0;
//asignees
var assignees = ["","Jason", "Derek", "Nate", "Samir", "Donnie"];
window.onload = function(){
  populate();
}

//functions
var addTask = function(){
  toast("#createToast");
  var task = document.getElementById("task").value;
  var date = document.getElementById("dueDate").value;
  var personText = document.getElementById("assignPerson").value;
  var personSelect = document.getElementById("assignees").value;
  if(task ==""){//tasks will only be added if there is SOMETHING in the input
    alert("task cannot be empty");
    clearInputs();
    return
  }
  if(date == ""){//date can be optional
    date = "none";
  }
  //different cases for text
  if((personSelect == "") && !(personText == "")){
    person = personText;
    if(!isAssigneeExists(personText)){
      assignees.push(personText);
      addAssignee(personText);
    }
  }
  else if(!(personSelect == "") && (personText == "")){
    document.getElementById("assignPerson").value = "";
    person = personSelect;
  }
  else if((personSelect == "") && (personText == "")){
    person = "none";
  }
  else {//if both are filled, will default to text entry...
    person = personText;
  }

  createListElement(task, date, person);
  clearInputs();

}

var toast = function(type){//visual notification to user
  $(type).stop().fadeIn(500).delay(1000).fadeOut(500);
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
  document.getElementById("assignees").value = assignees[0];
}

var addAssignee = function(person){//to add person to select dropdown
    var dropdown = document.getElementById("assignees");
    var option = document.createElement("option");
    option.appendChild(document.createTextNode(person));
    dropdown.appendChild(option);
}

var isAssigneeExists = function(person){//prevents extra
  for(var a in assignees){
    if(person == assignees[a]){
      return true;
    }
  }
  return false;
}

var populate = function(){//for select dropdown
  var dropdown = document.getElementById("assignees");
  for(var a in assignees){
    var option = document.createElement("option");
    option.appendChild(document.createTextNode(assignees[a]));
    dropdown.appendChild(option);
  }
}


var completeTask = function(e){
  toast("#completeToast");
  //create copy
  var temp = e.parentNode.cloneNode(true);
  //"cross through means done"
  temp.style.opacity = 0;
  temp.childNodes[1].setAttribute("style", "text-decoration: line-through; margin-left: 0;");
  temp.childNodes[0].setAttribute("class", "box-fill");
  //append to bottom.
  e.parentNode.parentNode.appendChild(temp);
  setTimeout(function(){temp.style.opacity = 1;}, 0);

  deleteTask(e.parentNode.childNodes[2].childNodes[2], false);//to prevent calling toast twice

}

var deleteTask = function(e, isDelete){
  if(isDelete){//for when delete task action is called.
    toast("#deleteToast");
  }
  //deletes the task...
  e.parentNode.parentNode.style.opacity = 0;
  setTimeout(function(){e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);}, 500);

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
  text.setAttribute("id", "taskresult");

  var due = document.createElement("div");// shows date due
  due.appendChild(document.createTextNode(date));
  due.setAttribute("class", "two columns");
  due.setAttribute("id", "dateresult");

  var person = document.createElement("div");
  person.appendChild(document.createTextNode(name));
  person.setAttribute("class", "two columns");
  person.setAttribute("id", "personresult");

  var del = document.createElement("a");//to delete task
  del.setAttribute("class", "del");
  del.appendChild(document.createTextNode("X"));
  del.setAttribute("onclick", "deleteTask(this, true)");

  var headRight = document.createElement("div");
  headRight.setAttribute("class", "head-right");

//appending to results
  task.appendChild(box);
  task.appendChild(text);
  task.appendChild(headRight);
  headRight.appendChild(due);
  headRight.appendChild(person);
  headRight.appendChild(del);

  document.querySelector("#results").insertBefore(task, document.querySelector("#results").firstChild);
  setTimeout(function(){document.getElementById("tasks " + tasks).style.opacity = 1;}, 0);

}

//Mobile

//create cancel button for form
var cancel = document.createElement("a");
cancel.setAttribute("id", "cancel");
cancel.setAttribute("class", "one column");
cancel.appendChild(document.createTextNode("x"));
$("form").append(cancel);

$(".actionButton").click(function(){
  //display mobile form
  $("form").show(500);
  $(".resultWrap").hide(500);
  $(".actionButton").hide(500);

  $("#cancel").click(function(){
    //hide form if canceled
    $("form").hide(500);
    $(".resultWrap").show(500);
    $(".actionButton").show(500);
    $("form").remove("#cancel");
  })

  $(document).keyup(function(e){//escape key as alternate cancel
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("form").hide(500);
        $(".resultWrap").show(500);
        $(".actionButton").show(500);
    }
  });

})








