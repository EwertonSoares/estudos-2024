function area(largura, altura) {
    const area = largura * altura

    if (area > 20) {
        console.log(`valotr acima do permitido ${area}m2.`)
    } else {
        return area
    }
}
/* Se não for passado todos os parametros esperado o retorno 
será NaN - Not a Number */
console.log(area())
console.log(area(2))
// Entrara no "if" e tamem no "else" e terá retorno undefined
// Entrará no "if" pois é um condição esperada
// Entrará no "else" pois a função tem retorno
console.log(area(5, 5))