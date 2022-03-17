function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById("resultado").innerHTML = "";
}
function back() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}



function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;

    let operador1;
    let operador2;
    if (resultado) {
        if (resultado.includes('+')) {
            operador1 = parseInt(resultado.split('+')[0]);
            operador2 = parseInt(resultado.split('+')[1]);    
            resultado = somar(operador1,operador2);
        } else if (resultado.includes('-')) {
            operador1 = parseInt(resultado.split('-')[0]);
            operador2 = parseInt(resultado.split('-')[1]);    
            resultado = subtrair(operador1,operador2);
        } else if (resultado.includes('*')) {
            operador1 = parseInt(resultado.split('*')[0]);
            operador2 = parseInt(resultado.split('*')[1]);    
            resultado = multiplicar(operador1,operador2);
        } else if (resultado.includes('/')) {
            operador1 = parseInt(resultado.split('/')[0]);
            operador2 = parseInt(resultado.split('/')[1]);    
            resultado = dividir(operador1,operador2);
        }

        document.getElementById("resultado").innerHTML = resultado;
    }
}

