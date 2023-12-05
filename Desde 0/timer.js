//? ----------------------------Funcion para Timer de Cubo Rubik
let tiempoInicio = null, idInterval
let diferenciaTemp = 0

const iniciar = () => {
    let ahora = new Date();
    tiempoInicio = new Date(ahora.getTime() - diferenciaTemp);
    clearInterval(idInterval);
    idInterval = setInterval(refrescarTiempo, 100)
}

const agrgarCeros = (valor) => { return valor < 10 ? '0' + valor : '' + valor; }

const miliAMinAndSeg = (milisegundos) => {
    let minutos = parseInt(milisegundos / 1000 / 60);
    milisegundos -= minutos * 60 * 1000;
    let segundos = milisegundos / 1000;
    return agrgarCeros(minutos) + ':' + agrgarCeros(segundos.toFixed(1));
}

const refrescarTiempo = () => {
    let ahora = new Date ();
    let diferencia = ahora.getTime() - tiempoInicio.getTime();
    // console.log(miliAMinAndSeg(diferencia));
    process.stdout.write(`\r${miliAMinAndSeg(diferencia)}`);
}

const test = () => {
    let n = 0;
    let x = setInterval(function() {
        // console.log(n);
        process.stdout.write(`\r${n}`); //* Lleva expresamente esta sintaxis
        n++;
    }, 1000);
}

const testDos = () => {
    let n = 0;
    let x = setInterval(function() {
        console.log(n);
        if (n == 10) { clearInterval(x); }
        n++;
    }, 1000);
}

iniciar();