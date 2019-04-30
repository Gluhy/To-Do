const dodaj_btn = document.querySelector("dodaj_btn")
const usun_btn = document.querySelector("usun_btn")
let zadania = []
let i=0
let lista = document.getElementById("lista")

document.getElementById("dodaj_btn").addEventListener("click",dodaj)
document.getElementById("dodaj_btn").addEventListener("click", wyswietl)
document.getElementById("dodaj_btn").addEventListener("click", puste_poleD)
//=====================================================================
document.getElementById("usun_btn").addEventListener("click",usun)
document.getElementById("usun_btn").addEventListener("click",wyswietl)
document.getElementById("usun_btn").addEventListener("click",puste_poleU) 



function wyswietl()
{
    lista.innerHTML = zadania.forEach, i => {
        print("[" + index + "] jest " + element);
    });
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
    const usun_txt = document.getElementById("usun_txt").value
    zadania.splice(usun_txt.value + 1)
}

function puste_poleU()
{
    usun_txt.value=""
}
