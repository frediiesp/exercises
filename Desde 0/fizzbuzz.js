//* ---------------------------- Clase para imprimir Fizzbuzz
const numero = 50
imprimirNumeracion(numero)

function imprimirNumeracion(num) {
    for (let i = 0; i < num; i++) {
        console.log(getFizzbuzz(i + 1));
    }
}

function getFizzbuzz(numb) {
    let fizzbuzz = numb
    if (numb % 3 == 0 && numb % 5 == 0)
        fizzbuzz = 'fizzbuzz'
    else {
        if (numb % 5 == 0)
            fizzbuzz = 'buzz'
        if (numb % 3 == 0)
            fizzbuzz = 'fizz'
    }
    return fizzbuzz
}