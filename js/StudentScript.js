//Variaveis globais
let npasso= 1;

function clearDisplay() {
    document.getElementById("calcInput").value = "";
    document.getElementById("resultOutput").innerText = "";
}

function deleteLast() {
    let display = document.getElementById("calcInput");
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("calcInput").value += value;
}

//Função que mostra o passo a passo
function setOutput(step) {
    //Imprime no display de saida o passo a passo
    let output = document.getElementById("resultOutput");
    output.innerHTML += step + "<br>";
}

function calculate() {
    //Limpa o display de saída antes de iniciar
    document.getElementById("resultOutput").innerText = "";
    //Obtem a expressão diretamente do campo de entrada
    let expression = document.getElementById("calcInput").value;
    npasso=1;

    //Resolve os parênteses antes de tudo
    expression = resolveParentheses(expression);

    //Resolve operações na ordem
    //Para adicionar uma nova função, é só copiar e colar a de baixo, lembrando que o o operador só pode ter 1 caractere
    expression = resolveOperations(expression, ['ê']);
    expression = resolveOperations(expression, ['*', '/', '%']);
    expression = resolveOperations(expression, ['+', '-']);

    //Exibe a mensagem do resultado final quando terminar
    setOutput(`Resultado final: ${expression}`);
}

//Função para resolver o conteúdo entre parênteses primeiro
function resolveParentheses(expression) {
    
    const regex = /\(([^()]+)\)/;
    //Enquanto existir operações para fazer, chama a função de calcular com os paramentros e coloca o resultado no lugar
    while (regex.test(expression)) {
        expression = expression.replace(regex, (match, subExpr) => {
            
            //Exibe o passo e retorna o valor
            setOutput(`${npasso}º Passo: ${match}`);
            npasso++;
            //Sempre que adicionar uma operação, inserir ela aqui dentro também
            return resolveOperations(subExpr, ['ê', '*', '/', '%', '+', '-']);
        });
    }
    return expression;
}

//Função para resolver as operações
function resolveOperations(expression, operators) {
    const regex = new RegExp(`(-?\\d+(\\.\\d+)?)\\s*([${operators.join('')}])\\s*(-?\\d+(\\.\\d+)?)`);
    
    //Enquanto existir operações para fazer, chama a função de calcular com os paramentros e coloca o resultado no lugar
    while (regex.test(expression)) {
        expression = expression.replace(regex, (match, n1, _, operator, n2) => {
            let result;
            //Com base no operador indicado, calcula a operação
            switch (operator) {
                case '*': result = parseFloat(n1) * parseFloat(n2); break;
                case '/': result = parseFloat(n1) / parseFloat(n2); break;
                case '+': result = parseFloat(n1) + parseFloat(n2); break;
                case '-': result = parseFloat(n1) - parseFloat(n2); break;
                case 'ê': result = Math.pow(parseFloat(n1), parseFloat(n2)); break;
                case '%': result = parseFloat(n1) * (parseFloat(n2) / 100); break;
                //Pode inserir o case com a operação aqui, seguido do break no final
            }
            //Se o operador for algo criado apenas pra facilitar a nossa vida, aqui dá pra alterar pelo padrão
            if(operator=='ê'){operator='^'}
            //Exibe o passo e retorna o valor
            setOutput(`${npasso}º Passo: ${n1} ${operator} ${n2} = ${result}`);
            npasso++;
            return result;
        });
    }
    return expression;
}