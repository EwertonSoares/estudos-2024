// Criando funçao de maneira comum
let dobro = function(a) {
    return 2 * a
}

// Criando funçao com arrow function

dobro = (a) => {
    return 2 * a
}

// Quando a função tem somente um parametro pode-se remover os parenteses
// Com arrow function o retorno tambem pode ser implicito
dobro = a => 2 * a


// Tambem é possivel criar arrow function sem paratros
// Função comum sem parametro
let ola = function() {
    return 'Ola'
}

// Arrow function sem parametro
// OBS: O retorno é implicito
ola = () => 'Ola' // Exemplo 1
ola = _ => 'Ola' // Exemplo 2 - Possui 1 parametro que pode ser ignorado