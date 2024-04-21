const num1 = parseFloat(prompt('Ingrese el primer número:'));
const num2 = parseFloat(prompt('Ingrese el segundo número:'));

const operacion = prompt('Seleccione la operación: suma (+), resta (-), multiplicación (*) o división (/)');

let resultado;

if (num1 || num2 === " ") {
    alert("Operacion invalida, debe ingresar dos numeros ")
}

if (operacion === '+') {
    resultado = num1 + num2;
    alert(`El resultado es: ${resultado}`);
} else if (operacion === '-') {
    resultado = num1 - num2;
    alert(`El resultado es: ${resultado}`);
} else if (operacion === '*') {
    resultado = num1 * num2;
    alert(`El resultado es: ${resultado}`);
} else if (operacion === '/') {
    resultado = num1 / num2;
    alert(`El resultado es: ${resultado}`);
} else {
    alert('Operación inválida');
}
