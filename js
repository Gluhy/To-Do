const dodaj_btn = document.querySelector("dodaj_btn")
const usun_btn = document.querySelector("usun_btn")
let zadania = []
const lista = document.getElementById("lista")
const check = document.getElementById("check")


document.getElementById("dodaj_btn").addEventListener("click",dodaj)
document.getElementById("dodaj_btn").addEventListener("click", wyswietl)
document.getElementById("dodaj_btn").addEventListener("click", puste_poleD)
//=====================================================================
document.getElementById("usun_btn").addEventListener("click",usun)
document.getElementById("usun_btn").addEventListener("click",wyswietl)
document.getElementById("usun_btn").addEventListener("click",puste_poleU) 


function wyswietl()
{
    lista.innerHTML = zadania
    .map((element, index) => `${index + 1}. ${element} <input type="checkbox" name="check" id="chceck${index}">`)
    .join("<br>");
}

function dodaj()
{
    const dodaj_txt = document.getElementById("dodaj_txt").value
    zadania.push(dodaj_txt)
    i++
}

function puste_poleD()
{
    dodaj_txt.value = ""
}

function usun()
{
    if (check[index].checked == true)
    {
        zadania.splice(check[index], 1)
    } 
}

function puste_poleU()
{
    usun_txt.value=""
}


