function soma() {
    let v1 = parseInt(document.getElementById("valor1").value);
    let v2 = parseInt(document.getElementById('valor2').value);
    document.getElementById("Resultado").value = v1 + v2;
}

function subtracao() {
    let v1 = parseInt(document.getElementById("valor1").value);
    let v2 = parseInt(document.getElementById('valor2').value);
    document.getElementById("Resultado").value = v1 - v2;
}

function multiplicacao() {
    let v1 = parseInt(document.getElementById("valor1").value);
    let v2 = parseInt(document.getElementById('valor2').value);
    document.getElementById("Resultado").value = v1 * v2;
}

function divisao() {
    let v1 = parseInt(document.getElementById("valor1").value);
    let v2 = parseInt(document.getElementById('valor2').value);
    document.getElementById("Resultado").value = v1 / v2;
}

