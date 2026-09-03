const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === '') {
    alert("Ketikkan sesuatu terlebih dahulu!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  
  let span = document.createElement("span");
  span.innerHTML = "\u00d7"; 
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

inputBox.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("todoData", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("todoData") || "";
}

showTask();