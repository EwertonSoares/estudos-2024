console.log(module.exports === this) // true
console.log(module.exports === exports) // true

/* "this" e "exports" ambos aponta para a mesma referencia em
memoria, o "module.exports" */
this.a = 1
exports.b = 2
module.exports.c = 3

/* Os valores abaixo nunca sao alterados pois semore é retornado 
o module.exports, sendo assim não é possivel adicionar um novo 
objeto ao exports. */
exports = null
exports = {
    teste: 'teste'
}

console.log(module.exports)
/* A maneira correta de adicionar objeto. */
module.exports = {
    funciona: true
}

console.log(module.exports)