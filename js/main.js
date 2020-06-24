let operandoa;
let operandob;
let operacion;


uno.onclick = function () {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function () {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function () {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function () {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function () {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function () {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function () {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function () {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function () {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function () {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function () {
    resetear();
}
suma.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function () {
    operandob = resultado.textContent;
    addElements();
    resolver();
  
}


function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}

function addElements(){
    let res = document.getElementById("resultado").innerHTML;
    let objetoDiv = document.getElementById("contenedor");
    let p = document.createElement("p");
    p.innerHTML = res;
    objetoDiv.appendChild(p);
    }

    function deleteElements(){
        let objetoDiv = document.getElementById("contenedor").lastElementChild;
        objetoDiv.remove();
        }
            
    function deleteAllElements(){
        let objetoDiv = document.getElementById("contenedor");
        while (objetoDiv.firstChild) {
            objetoDiv.removeChild(objetoDiv.firstChild);
         }
    }