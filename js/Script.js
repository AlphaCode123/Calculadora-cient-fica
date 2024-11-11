function clearDisplay() {
    document.getElementById("calcInput").value = "";
    document.getElementById("resultOutput").innerText = "";
}

function deleteLast() {
    const display = document.getElementById("calcInput");
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("calcInput").value += value;
}

function calculate() {
    const display = document.getElementById("calcInput");
    const result = document.getElementById("resultOutput");
    try {
        result.innerText = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}