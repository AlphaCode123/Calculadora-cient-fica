function Calcularegrade3D(){
    let ValorA = parseFloat(document.getElementById("calcInputA").value);
    let ValorB = parseFloat(document.getElementById("calcInputB").value);
    let ValorC = parseFloat(document.getElementById("calcInputC").value);
    const Result = document.getElementById("resultOutputRd3D");
    if (isNaN(ValorA) || isNaN(ValorB) || isNaN(ValorC) || ValorB === 0) {
        Result.value = "Valores inválidos!";
        return;
    }
    else{
        let Resultado = (ValorC*ValorB)/ValorA;
        Result.value = Resultado;
    }
    

}
function Calcularegrade3I(){
    let ValorA = parseFloat(document.getElementById("calcInputARD3I").value);
    let ValorB = parseFloat(document.getElementById("calcInputBRD3I").value);
    let ValorC = parseFloat(document.getElementById("calcInputCRD3I").value);
    const Result = document.getElementById("resultOutputRd3I");
    if (isNaN(ValorA) || isNaN(ValorB) || isNaN(ValorC) || ValorB === 0) {
        Result.value = "Valores inválidos!";
        return;
    }
    else{
        let Resultado = (ValorA*ValorC)/ValorB;
        Result.value = Resultado;
    }
    

}
function CalculaPA(){
    let ValorA = parseFloat(document.getElementById("calcInputAPA").value);
    let ValorB = parseFloat(document.getElementById("calcInputBPA").value);
    let ValorC = parseFloat(document.getElementById("calcInputCPA").value);
    const Result = document.getElementById("resultOutputPA");
    if (isNaN(ValorA) || isNaN(ValorB) || isNaN(ValorC) || ValorB === 0) {
        Result.value = "Valores inválidos!";
        return;
    }
    else{
        let Resultado = ValorA+(ValorB*(ValorC-1));
        Result.value = Resultado;
    }
    

}
function CalculaPG(){
    let ValorA = parseFloat(document.getElementById("calcInputAPG").value);
    let ValorB = parseFloat(document.getElementById("calcInputBPG").value);
    let ValorC = parseFloat(document.getElementById("calcInputCPG").value);
    const Result = document.getElementById("resultOutputPG");
    if (isNaN(ValorA) || isNaN(ValorB) || isNaN(ValorC) || ValorB === 0) {
        Result.value = "Valores inválidos!";
        return;
    }
    else{
        let Resultado = ValorA*(ValorB**(ValorC-1));
        Result.value = Resultado;
    }
    

}
function CalculaPIT(){
    let ValorA = parseFloat(document.getElementById("calcInputAPIT").value);
    let ValorB = parseFloat(document.getElementById("calcInputBPIT").value);
    const Result = document.getElementById("resultOutputPIT");
    if (isNaN(ValorA) || isNaN(ValorB) || ValorB === 0) {
        Result.value = "Valores inválidos!";
        return;
    }
    else{
        let Resultado = ((ValorA**2)+(ValorB**2))**(1/2);
        Result.value = Resultado;
    }
    

}