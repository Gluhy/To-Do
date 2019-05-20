const add_btn = document.querySelector("add_btn");
const del_btn = document.querySelector("del_btn");
let toDo = [];
const list = document.getElementById("list");
const didBtnDiv = document.getElementById("didBtnDiv");
let did_ = [];
let delStats = 0;

document.getElementById("add_btn").addEventListener("click", add);
document.getElementById("add_btn").addEventListener("click", clearAdd);
//=====================================================================
document.getElementById("did_btn").addEventListener("click", didF);
//=====================================================================
document.getElementById("del_btn").addEventListener("click", toDelete);
//=====================================================================
document.getElementById("add_btn").addEventListener("click", addStorage);
document.getElementById("did_btn").addEventListener("click", addStorage);
document.getElementById("del_btn").addEventListener("click", addStorage);



function show() {
  list.innerHTML = toDo
    .map(
      (element, index) =>
        `${index +
          1}. ${element} <input type="checkbox" id="checkboxToDo${index}">`
    )
    .join("<br>");
  stats();
}

function add() {
  const add_txt = document.getElementById("add_txt").value;
  toDo.push(add_txt);
  show();
}

function clearAdd() {
  add_txt.value = "";
}

function moveToDid() {
  toDo.forEach(
    (_, i) =>
      document.getElementById(`checkboxToDo${i}`).checked && toDo.splice(i, 1)
  );
  show();
  didShow();
}

function btnAdd() {
  if (event.key === "Enter") {
    add();
    clearAdd();
    addStorage()
  }
}

function didF() {
  toDo.forEach(
    (a, i) =>
      document.getElementById(`checkboxToDo${i}`).checked && did_.push(a)
  );
  console.log(did_);
  moveToDid();
}

function didShow() {
  const done = document.getElementById("done");
  done.innerHTML = did_
    .map(
      (element, index) =>
        `${index +
          1}. <strike>${element}</strike> <input type = "checkbox" id = "checkboxDid${index}">`
    )
    .join("</br>");
  stats();
}

function toDelete() {
  did_.forEach(
    (_, index) =>
      document.getElementById(`checkboxDid${index}`).checked &&
      did_.splice(index, 1) &&
      delStats++
  );
  didShow();
}

function stats() {
  const statsDiv = document.getElementById("statsDiv");
  let toDoStats = toDo.length;
  let didStats = did_.length;
  statsDiv.innerHTML = `Do zrobienia: ${toDoStats} <br> Zrobione: ${didStats} <br> Usunięte: ${delStats}`;
}

function addStorage() {
  stats();
  localStorage.setItem("toDoStorage", toDo);
  localStorage.setItem("did_Storage", did_);
  localStorage.setItem("delStatsStorage", delStats);
}

function getElementFromStorage() {
    let toDoStorage = localStorage.getItem("toDoStorage")
    let did_Storage = localStorage.getItem("did_Storage")
    let delStatsStorage = localStorage.getItem("delStatsStorage")
    stats();
    
    console.log(toDoStorage)
    list.innerHTML = toDoStorage
    done.innerHTML = did_Storage
    delStats.innerHTML = delStatsStorage
}

