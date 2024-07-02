/* "this" não aponta para "global" e nem para "module", 
ele sim para "module.exports" e "exports". */
console.log(this === global) // false
console.log(this === module) // false

/* "this" aponta para "module.exports" e para "exports", pois 
ambos apontam para a mesma referencia de memoria isso fora de 
uma função ou objeto. */
console.log(this === module.exports) // true
console.log(this === exports) // true

// "this" dentro de uma função convencional
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === module.exports) // false
    console.log(this === exports) // false
    // "this" dentro de uma função aponta para o objeto "global".
    console.log(this === global) // true

    this.perigo = 'Você esta adicionanando atributo ao objeto global'
}
logThis()

// "this" dentro de arrow function
/* Em uma arrow function o "this" volta a apontar para 
"module.export" e "exports". */
const thisInArrow = () => {
    console.log("this em uma arrow function.")
    console.log(this === global) // false
    console.log(this === module) // false
    console.log(this === module.exports) // true
    console.log(this === exports) // true
}
thisInArrow()