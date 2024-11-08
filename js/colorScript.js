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

function openFunctionMenu(){
    document.getElementById("sidebarContainer").style.display= "block";
}
function closeFunctionMenu(){
    document.getElementById("sidebarContainer").style.display= "none";
}

//Lista de valores para a coluna "Nome"
let nameText = {
    botao1:"Função 1",
    botao2:"Função 2",
    botao3:"Função 3",
    botao4:"Função 4",
    botao5:"Função 5",
    botao6:"Função 6",
    botao7:"Função 7",
    botao8:"Função 8",
    botao9:"Função 9",
    botao10:"Função 10",
    //Se precisar adicionar mais botões é só copiar e colar, só precisa mudar o número
};
//Lista de valores para a coluna "Descrição"
let descriptionText = {
    botao1:"Descrição 1",
    botao2:"Descrição 2",
    botao3:"Descrição 3",
    botao4:"Descrição 4",
    botao5:"Descrição 5",
    botao6:"Descrição 6",
    botao7:"Descrição 7",
    botao8:"Descrição 8",
    botao9:"Descrição 9",
    botao10:"Descrição 10",
    //Se precisar adicionar mais botões é só copiar e colar, só precisa mudar o número
};
//Lista de valores para a coluna "Como usar"
let howtouseText = {
    botao1:"Guia 1",
    botao2:"Guia 2",
    botao3:"Guia 3",
    botao4:"Guia 4",
    botao5:"Guia 5",
    botao6:"Guia 6",
    botao7:"Guia 7",
    botao8:"Guia 8",
    botao9:"Guia 9",
    botao10:"Guia 10",
    //Se precisar adicionar mais botões é só copiar e colar, só precisa mudar o número
};
//Função que adiciona o conteúdo explicativo referente à função clicada
function addFunctionDescription(buttonId){
    //Variaveis locais usadas na função
    let localDescription = document.getElementById("localDescription");
    let row = document.createElement("tr");

    //Se existir valor inserido, remove
    if (localDescription.rows.length > 0) {
        localDescription.deleteRow(0);
    }

    //Insere a coluna com o nome da função
    let colName = document.createElement("td");
    colName.textContent = nameText[buttonId];
    row.appendChild(colName);

    //Insere a coluna com a descrição da função
    let colDescription = document.createElement("td");
    colDescription.textContent = descriptionText[buttonId];
    row.appendChild(colDescription);

    //Insere a coluna com o guia da função
    let colHowToUse = document.createElement("td");
    colHowToUse.textContent = howtouseText[buttonId];
    row.appendChild(colHowToUse);

    //Adiciona a nova linha à tabela
    localDescription.appendChild(row);
}