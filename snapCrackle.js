function snapCrackle(maxValue) {

    let resultado = ""

    for (let i = 1; i <= maxValue; i++) {
        
        if (i % 5 == 0) {
            if (i % 2 != 0) {
                resultado += "SnapCrackle, "
            } else {
                resultado += "Crackle, "
            }
        } else if (i % 2 == 0) {
            resultado += `${i}, `
        } else if (i % 2 != 0) {
            resultado += "Snap, "
        }
    }
    return resultado
}

function snapCracklePrime(maxValue) {

    let resultado = ""

    for (let i = 1; i <= maxValue; i++) {
        let numeroAtual = i
        let multPrimo = 0
        for (let r = 1; r <= numeroAtual; r++) {
            if (numeroAtual % r == 0) {
                multPrimo++
            }
        }
        
        if (numeroAtual == 2) {
            resultado += "Prime, "
        } else if (numeroAtual % 5 == 0 && numeroAtual % 2 != 0) {
            if (multPrimo == 2) {
                resultado += "SnapCracklePrime, "
            } else {
                resultado += "SnapCrackle, "
            }
        } else if (numeroAtual % 5 == 0) {
            if (multPrimo == 2) {
                resultado += "CracklePrime, "
            } else {
                resultado += "Crackle, "
            }
        } else if (numeroAtual % 2 != 0) {
            if (multPrimo == 2) {
                resultado += "SnapPrime, "
            } else {
                resultado += "Snap, "
            }
        } else {
            resultado += `${numeroAtual}, `
        }
    }
    return resultado
}