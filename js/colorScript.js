//Variaveis globais
let page = document.querySelector("html");

//Função que ao iniciar o site aplica a coloração padrão
function startPage(){
    page.classList.add("defaultMode")
}

//Função que aplica a coloração padrão
function defaultMode(){
    page.classList.remove("darkMode", "colorBlindMode");
    page.classList.add("defaultMode");
}

//Função que aplica a coloração escura
function darkMode(){
    page.classList.remove("defaultMode", "colorBlindMode");
    page.classList.add("darkMode");
}

//Função que aplica a coloração adaptada para daltônicos
function colorBlindMode(){
    page.classList.remove("defaultMode", "darkMode");
    page.classList.add("colorBlindMode");
}

//Função que detecta quando o site é iniciado e chama a função de aplicar cores
window.onload = function(){
    startPage();
}