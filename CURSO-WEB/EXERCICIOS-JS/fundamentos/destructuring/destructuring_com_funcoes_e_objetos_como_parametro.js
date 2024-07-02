// A função rand() esta recebendo valor usando destructuring
// min vai recer 40 e 0 como valor padrão
// max vai receber 50 e 1000 como valor padrão
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// O objeto passado para a função rand() sera destrutualizado 
console.log(rand( {max: 50, min: 40}))