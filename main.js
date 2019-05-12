const add_btn = document.querySelector("add_btn")
const del_btn = document.querySelector("del_btn")
let toDo = []
const list = document.getElementById("list")
const deleteBtnDiv = document.getElementById("deleteBtnDiv")
let did_ = []

document.getElementById("add_btn").addEventListener("click", add)
document.getElementById("add_btn").addEventListener("click", clearAdd)
//=====================================================================
document.getElementById("del_btn").addEventListener("click", didF)


function show()
{
    list.innerHTML = toDo
    .map((element, index) => `${index + 1}. ${element} <input type="checkbox" id="checkbox${index}">`)
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

function toDelete()
{
    toDo.forEach((_, i) => document.getElementById(`checkbox${i}`).checked && toDo.splice(i, 1))
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
    toDo.forEach((a, i) => document.getElementById(`checkbox${i}`).checked && did_.push(a))
    console.log(did_)
    toDelete()
}

function didShow()
{
    const done = document.getElementById("done")
    done.innerHTML = did_
    .map((element, index) => `${index + 1}. <strike>${element}</strike>`)
    .join("</br>")
}

