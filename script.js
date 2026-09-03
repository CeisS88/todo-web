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
  span.innerHTML = "\u00d7"; // Simbol silang (×) untuk hapus
  li.appendChild(span);

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

// Menambah tugas dengan menekan tombol Enter
inputBox.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Fitur tandai selesai dan hapus
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Menyimpan struktur HTML list ke localStorage
function saveData() {
  localStorage.setItem("todoData", listContainer.innerHTML);
}

// Memuat kembali data saat website dibuka
function showTask() {
  listContainer.innerHTML = localStorage.getItem("todoData") || "";
}

showTask();