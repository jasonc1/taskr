var tasks = 0;

//functions
var addTask = function(){
  var task = document.getElementById("task").value;
  var date = document.getElementById("dueDate").value;
  if(task ==""){
    alert("task cannot be empty");
    clearInputs();
    return
  }
  if(date == ""){
    date = "none";
    tasks++;
  }
  createListElement(task, date);

  clearInputs();

}

var enter = function(e){
  if(e.which == 13){
    addTask();
  }
}

var clearInputs = function(){
  document.getElementById("task").value = "";
  document.getElementById("dueDate").value = "";
}


var completeTask = function(){
  console.log("completing...");
}

var deleteTask = function(e){
  // console.log("deleting...");
  console.log(e.parentNode);
  e.parentNode.parentNode.removeChild(e.parentNode);
}

var createListElement = function(taskdata, date){
  var task = document.createElement("div");
  task.setAttribute("class", "row task ");
  task.setAttribute("id", "tasks " + tasks);

  var box = document.createElement("a");
  box.setAttribute("class", "box");
  box.setAttribute("onclick", "completeTask()");


  var text = document.createElement("div");
  text.appendChild(document.createTextNode(taskdata));
  text.setAttribute("class", "nine columns");
  text.setAttribute("style", "margin-left: 0;");

  var due = document.createElement("div");
  due.appendChild(document.createTextNode(date));
  due.setAttribute("class", "two columns");

  var del = document.createElement("a");
  del.setAttribute("class", "del");
  del.appendChild(document.createTextNode("X"));
  del.setAttribute("onclick", "deleteTask(this)");

  task.appendChild(box);
  task.appendChild(text);
  task.appendChild(due);
  task.appendChild(del);

  document.querySelector("#results").appendChild(task);

}