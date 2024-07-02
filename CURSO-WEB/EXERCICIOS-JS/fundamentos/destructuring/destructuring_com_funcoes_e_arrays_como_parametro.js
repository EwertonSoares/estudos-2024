// A função rand() esta recebendo valor usando destructuring com array
// min vai recer 40 e 0 como valor padrão
// max vai receber 50 e 1000 como valor padrão
function rand([min = 0, max = 1000]) {
    // Condição faz a inversao dos valores, min recebe max e max recebe mim
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// O array passado para a função rand() sera destrutualizado 
console.log(rand([50, 40]))