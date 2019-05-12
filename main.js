const add_btn = document.querySelector("add_btn")
const del_btn = document.querySelector("del_btn")
let toDo = []
const list = document.getElementById("list")
const didBtnDiv = document.getElementById("didBtnDiv")
let did_ = []

document.getElementById("add_btn").addEventListener("click", add)
document.getElementById("add_btn").addEventListener("click", clearAdd)
//=====================================================================
document.getElementById("did_btn").addEventListener("click", didF)
//=====================================================================
document.getElementById("del_btn").addEventListener("click",toDelete)


function show()
{
    list.innerHTML = toDo
    .map((element, index) => `${index + 1}. ${element} <input type="checkbox" id="checkboxToDo${index}">`)
        .join("<br>")
}

function add()
{
    const add_txt = document.getElementById("add_txt").value
    toDo.push(add_txt)
    show()
}

function clearAdd()
{
    add_txt.value = ""
}

function moveToDid()
{
    toDo.forEach((_, i) => document.getElementById(`checkboxToDo${i}`).checked && toDo.splice(i, 1))
    show()
    didShow()
}

function btnAdd()
{
    if (event.key === "Enter")
        {
            add()
            clearAdd()
        }
} 

function didF()
{
    toDo.forEach((a, i) => document.getElementById(`checkboxToDo${i}`).checked && did_.push(a))
    console.log(did_)
    moveToDid()
}

function didShow()
{
    const done = document.getElementById("done")
    done.innerHTML = did_
    .map((element, index) => `${index + 1}. <strike>${element}</strike> <input type = "checkbox" id = "checkboxDid${index}">`)
    .join("</br>")
}

function toDelete()
{
    did_.forEach((_, index) => document.getElementById(`checkboxDid${index}`).checked && did_.splice(index, 1))
    didShow()
}
