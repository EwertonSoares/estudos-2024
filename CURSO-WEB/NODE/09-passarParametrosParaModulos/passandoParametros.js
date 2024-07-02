// Esse modulo/arquivo adiciona uma função ao "module.exports".
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}`)
}