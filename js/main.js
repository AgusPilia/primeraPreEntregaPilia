function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;

    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultado = "Error: división por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = 'Operación inválida';
    }

    document.getElementById('resultado').innerText = `El resultado es: ${resultado}`;
}