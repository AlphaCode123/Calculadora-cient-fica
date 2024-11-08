function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const display = document.getElementById("display");
    const result = document.getElementById("resultado");
    try {
        result.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}