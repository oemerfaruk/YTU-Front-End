// alert("Merhaba Dünya!")
// prompt("Bir sayı girin")


const elementLive = document.getElementById("live");
const elementStatus = document.getElementById("status");
const inputBox = document.getElementById("tahmin");
const button = document.getElementById("button");
const game = document.getElementById("gameBox");


let number = Math.floor(Math.random()*20+1);
let live = 5;
let tahmin;


function getValue(){
    let val = document.getElementById("tahmin").value;
    elementLive.innerText = live;
    tahmin = parseInt(val);

    if (live === 0){
        game.style.display = "none";
    }
    if(tahmin-number <= 4 && tahmin-number > 0){
        live--;
        elementStatus.innerText = "biraz kucuk bir sayi girin";
    }
    else if(tahmin-number > 4 && tahmin-number > 0){
        live--;
        elementStatus.innerText = "daha kucuk bir sayi girin";
    }
    

    else if(tahmin-number <= -4 && tahmin-number < 0){
        live--;
        elementStatus.innerText = "biraz buyuk bir sayi girin";
    }
    else if(tahmin-number > -4 && tahmin-number < 0){
        live--;
        elementStatus.innerText = "daha buyuk bir sayi girin";
    }


    else{
        elementStatus.innerText = "Tebrikler Bildiniz";

    }
}

console.log(number);