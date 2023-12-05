//* ---------------------------- Clase para detectar un palindromo
const word = '1000000000000066600000000000001'
buscarPalin(word)

function buscarPalin(palabra) {
    let arrayDer = []
    let nuevaPalabra = ''
    for (let i = 0; i < palabra.length; i++)
        arrayDer.push(palabra.substring(i, i + 1))

    for (let i = arrayDer.length - 1; i >= 0; i--)
        nuevaPalabra += arrayDer[i].toString()

    if (palabra == nuevaPalabra)
        console.log(palabra + ', Sí es un Palindromo')
    else
        console.log(palabra + ', No es un Palindromo')
    
    console.log(arrayDer);
    console.log(nuevaPalabra);
}