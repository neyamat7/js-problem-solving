// Get IDs
console.log("js working");

let runningTime = document.getElementById("running-time");

let inputTask = document.getElementById("task-input");
let addTask = document.getElementById("add-task");

let taskContainer = document.getElementById("task-list-container");
let doneTask = document.getElementById("done-task");
let editTask = document.getElementById("edit-task");
let deleteTask = document.getElementById("delete-task");
let taskCompContainer = document.getElementById("Completed-task-container");

editTask.addEventListener("click", function (event) {
  let addedTask =
    event.target.parentNode.parentNode.previousElementSibling.querySelector(
      "input"
    );
  console.log(addedTask);
  addedTask.removeAttribute("disabled");

  let newValue;
  addedTask.addEventListener("keyup", function (e) {
    e.preventDefault();
    newValue = e.target.value;
    addedTask.value = newValue;
  });
});

doneTask.addEventListener('click', function(){

})