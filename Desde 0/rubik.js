//? ----------------------------Funcion para Mezcla de Cubo Rubik

function mezcla(dim) {
    let mov = 0
    let caras = ['F', 'U', 'R']
    let giro = ["'", "2", ""]
    let mzcl = ''
    switch (dim) {
        case 2: mov = 9; break;
        case 3:
            mov = 20
            caras.push('B', 'D', 'L')
            break;
        case 4:
            mov = 43
            break;
    }

    let oldCara = ''
    let antCara = ''
    let newCara = ''

    for (let i = 0; i < mov; i++) {
        let aux = esContraria(oldCara, antCara)
        if (aux) {
            if (!aux.includes(newCara))
                aux = undefined
        }

        while (antCara == newCara || aux != undefined) {
            if (aux) {
                let nuevasCaras = caras.slice()
                for (let i in aux) {
                    nuevasCaras.splice(nuevasCaras.indexOf(aux[i]), 1)
                }
                newCara = nuevasCaras[Math.floor(Math.random() * nuevasCaras.length)]
                aux = undefined
            } else
                newCara = caras[Math.floor(Math.random() * caras.length)]
        }
        mzcl += newCara + giro[Math.floor(Math.random() * giro.length)] + ' '
        oldCara = antCara
        antCara = newCara

        newCara = ''
        newCara = caras[Math.floor(Math.random() * caras.length)]
    }

    return mzcl
}

function esContraria(old, ant) {
    const rl = ['R', 'L']
    const fb = ['F', 'B']
    const ud = ['U', 'D']

    // if (rl.includes(ant) && rl.includes(old)) return rl
    // if (fb.includes(ant) && fb.includes(old)) return fb
    // if (ud.includes(ant) && ud.includes(old)) return ud
    if (rl.includes(ant)) return rl
    if (fb.includes(ant)) return fb
    if (ud.includes(ant)) return ud
    return undefined
}

console.log('\n' + mezcla(3) + '\n');