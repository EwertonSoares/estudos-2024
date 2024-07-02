function divisao(dividendo = 0, divisor = 0) {
    return {
        resultado: Math.floor(dividendo / divisor),
        resto: dividendo % divisor
    }
}

const obj = divisao(3, 2)
console.log(obj.resultado)
console.log(obj.resto)