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
function screenWidthCheck(){
    let width = window.innerWidth;

    if(width>970){
        document.getElementById("sidebarContainer").style.display= "block";
    }
    else{
        document.getElementById("sidebarContainer").style.display= "none";
    }
}
//Função que detecta quando o site é iniciado e chama a função de aplicar cores e a de checar o tamanho da tela
window.addEventListener("resize", screenWidthCheck);
window.onload = function(){
    startPage();
    screenWidthCheck();
}

function openFunctionMenu(){
    document.getElementById("sidebarContainer").style.display= "block";
}
function closeFunctionMenu(){
    document.getElementById("sidebarContainer").style.display= "none";
}

//Lista de valores para a coluna "Nome"
let nameText = {
    //Calculadora cientifica (e calculadora básica, pois só tem 2 funções)
    botao1:"Porcentagem",
    botao2:"Resto de Divisão",
    botao3:"Seno",
    botao4:"Cosseno",
    botao5:"Tangente",
    botao6:"Raiz Quadrada",
    botao7:"Logaritimo Natural",
    botao8:"Exponencial",
    botao9:"Número de Euler",
    //Calculadora pra estudantes
    botao10:"Porcentagem",
    botao11:"Resto de Divisão",
    botao12:"X elevado à potência Y",
    botao13:"Raiz Enésima",
    botao14:"Regra de Três",
    botao15:"Regra de Três Inversamente Proporcional",
    botao16:"Progressão Aritmética",
    botao17:"Progressão Geométrica",
    botao18:"Teorema de Pitágoras",
    //Se precisar adicionar mais botões é só copiar e colar, só precisa mudar o número
};
//Lista de valores para a coluna "Descrição"
let descriptionText = {
    //Calculadora cientifica (e calculadora básica, pois só tem 2 funções)
    botao1:"É a divisão de um número qualquer por 100.",
    botao2:"É o valor que sobra quando a divisão não é exata.",
    botao3:"É uma razão trigonométrica, ou seja, divisões realizadas entre as medidas de lados de um triângulo retângulo.",
    botao4:"É definido como a razão entre o comprimento do lado adjacente (cateto) e o lado mais longo (hipotenusa) de um triângulo retângulo.",
    botao5:"É uma função trigonométrica que se calcula dividindo o cateto oposto pelo cateto adjacente de um triângulo retângulo.",
    botao6:"É uma operação matemática que consiste em descobrir qual o número que, elevado ao quadrado, resulta no número dado.",
    botao7:"É a função inversa da função exponencial.",
    botao8:"É representada pela lei f(x) = ax, e pode gerar um gráfico crescente ou decrescente, dependendo do valor da base 'a'.",
    botao9:"É uma constante matemática que pode ser calculada através da soma de 1/(n!), onde 'n' varia de 0 até o infinito.",
    //Calculadora pra estudantes
    botao10:"É a divisão de um número qualquer por 100",
    botao11:"É o valor que sobra quando a divisão não é exata.",
    botao12:"Elevar um número qualquer a outro.",
    botao13:"A raiz enésima de um número a elevado a n é igual ao próprio número a.",
    botao14:"É uma proporção entre duas grandezas.",
    botao15:"As grandezas são inversamente proporcionais, ou seja, se uma aumentar, a outra diminui.",
    botao16:"É uma sequência em que a diferença de um termo com o seu anterior é sempre igual.",
    botao17:"É uma sequência numérica que possui uma razão fixa q e, a partir do primeiro termo, os termos são cálculos pela razão q vezes o seu antecessor.",
    botao18:"É uma relação matemática que relaciona as medidas dos lados de um triângulo retângulo.",
    //Se precisar adicionar mais botões é só copiar e colar, só precisa mudar o número
};
//Lista de valores para a coluna "Como usar"
let howtouseText = {
    //Calculadora cientifica (e calculadora básica, pois só tem 2 funções)
    botao1:"Digite o número, aperte a tecla x (multiplicação), digite a porcentagem e, em seguida, pressione a tecla %.",
    botao2:"Digite o número, aperte a tecla rest, digite outro número e, em seguida, pressione a tecla =.",
    botao3:"Digite o valor do ângulo e, em seguida pressione a tecla sin, o resultado aparecerá.",
    botao4:"Digite o valor do ângulo e, em seguida pressione a tecla cos, o resultado aparecerá.",
    botao5:"Digite o valor do ângulo e, em seguida pressione a tecla tan, o resultado aparecerá.",
    botao6:"Digite o número e, em seguida a tecla da raiz quadrada, o resultado aparecerá.",
    botao7:"Digite o número e, em seguida pressione a tecla ln, o resultado aparecerá.",
    botao8:"Digite o valor da base e, em seguida pressione a tecla x, digite o valor do expoente e o resultado aparecerá.",
    botao9:"Digite o valor do expoente e, em seguida pressione a tecla e, o resultado aparecerá.",
    //Calculadora pra estudantes
    botao10:"Digite o número, aperte a tecla x (multiplicação), digite a porcentagem e, em seguida, pressione a tecla %.",
    botao11:"Digite o número, aperte a tecla rest, digite outro número e, em seguida, pressione a tecla =.",
    botao12:"Digite o número, aperte a tecla xy, digite o expoente e, em seguida, pressione a tecla =.",
    botao13:"Digite o número, aperte a tecla raiz enésima, digite o índice da raiz e, em seguida pressione a tecla =.",
    botao14:"Digite os três valores conhecidos (A,B,C), aperte a tecla r3d, o resultado X aparecerá.",
    botao15:"Multiplique os dois valores conhecidos que estão na mesma linha oposta ao X, divida pelo valor conhecido que está na mesma linha de X, leia o resultado.",
    botao16:"Digite o primeiro termo a1, digite a razão r, digite o número de termos n e, em seguida pressione o botão PA, o resultado aparecerá.",
    botao17:"Digite o primeiro termo a1, digite a razão r, digite o número de termos n e, em seguida pressione o botão PG, o resultado aparecerá.",
    botao18:"Digite o valor do primeiro cateto a, digite o valor do segundo cateto b, pressione o botão Teorema de Pitágoras, o visor exibirá o valor da hipotenusa c.",
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