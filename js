const dodaj_btn = document.querySelector("dodaj_btn")
const usun_btn = document.querySelector("usun_btn")
let zadania = []
const lista = document.getElementById("lista")
const box = document.getElementById("box")
const deleteBtt = document.getElementById("deleteBtt")


document.getElementById("dodaj_btn").addEventListener("click",dodaj)
document.getElementById("dodaj_btn").addEventListener("click", puste_poleD)
//=====================================================================
document.getElementById("usun_btn").addEventListener("click",toDelete)




function wyswietl()
{
    lista.innerHTML = zadania
    .map((element, index) => `${index + 1}. ${element} <input type="checkbox" name="box">`)
    .join("<br>");
}

function dodaj()
{
    const dodaj_txt = document.getElementById("dodaj_txt").value
    zadania.push(dodaj_txt)
    wyswietl()
}

function puste_poleD()
{
    dodaj_txt.value = ""
}

function deleteElementAt(boxNumber)
{
    zadania.splice(boxNumber, 1);
    wyswietl();
}

function toDelete()
{
    let boxNumber
    for (let i=0; i< zadania.length; i++)
    {

    if (zadania.box[i].checked)
        {
            boxNumber = i
            deleteElementAt(boxNumber)
            break
        }
        else
        {
            continue
        }
        console.log([i])
    }
}
