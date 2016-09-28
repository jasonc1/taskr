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


var completeTask = function(e){
  console.log("completing...");
  var temp = e.parentNode.cloneNode(true);
  temp.childNodes[1].setAttribute("style", "text-decoration: line-through; margin-left: 0;");
  temp.childNodes[0].setAttribute("class", "box-fill");
  console.log(temp);
  e.parentNode.parentNode.appendChild(temp);

  deleteTask(e);
}

var deleteTask = function(e){
  // console.log("deleting...");
  // console.log(e.parentNode);
  e.parentNode.parentNode.removeChild(e.parentNode);
}

var createListElement = function(taskdata, date){
  tasks++;
  console.log(tasks);
  var task = document.createElement("div");
  task.setAttribute("class", "row task ");
  task.setAttribute("id", "tasks " + tasks);

  var box = document.createElement("a");
  box.setAttribute("class", "box");
  box.setAttribute("onclick", "completeTask(this)");


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

  document.querySelector("#results").insertBefore(task, document.querySelector("#results").firstChild);

}