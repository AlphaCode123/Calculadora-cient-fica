//Variaveis globais
let page = document.querySelector("html");

function startPage(){
    page.classList.add("defaultMode")
}

function defaultMode(){
    page.classList.remove("darkMode", "colorBlindMode");
    page.classList.add("defaultMode");
}

function darkMode(){
    page.classList.remove("defaultMode", "colorBlindMode");
    page.classList.add("darkMode");
}

function colorBlindMode(){
    page.classList.remove("defaultMode", "darkMode");
    page.classList.add("colorBlindMode");
}

window.onload = function(){
    startPage();
}