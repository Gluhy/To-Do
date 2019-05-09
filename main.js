const add_btn = document.querySelector("add_btn")
const del_btn = document.querySelector("del_btn")
let works = []
const list = document.getElementById("list")
const deleteBtn = document.getElementById("deleteBtn")


document.getElementById("add_btn").addEventListener("click", add)
document.getElementById("add_btn").addEventListener("click", clearAdd)
//=====================================================================
document.getElementById("del_btn").addEventListener("click", toDelete)




function show()
{
    list.innerHTML = works
    .map((element, index) => `${index + 1}. ${element} <input type="checkbox" id="checkbox${index}">`)
        .join("<br>");
}

function add()
{
    const add_txt = document.getElementById("add_txt").value
    works.push(add_txt)
    show()
}

function clearAdd()
{
    add_txt.value = ""
}

function toDelete()
{
    works.forEach((_, i) => document.getElementById(`checkbox${i}`).checked && works.splice(i, 1))
    show();
}

function btnAdd()
{
    if (event.key == "Enter")
        {
            add()
            clearAdd()
        }
}
