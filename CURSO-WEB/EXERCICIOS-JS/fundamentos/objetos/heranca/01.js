// Existe uma propriedade dos objetos chamada prototype
/* Essa propriedade é um objeto raiz de onde os demais 
objetos são criados/herdados.

Quando se tenta acessar uma propriedade que não é encontrada no objeto
altomaticamente o codigo tenta acessar o prototipo/pai para procurar 
a proprieade e assim sucessivamente até não encontrar nada e retornar 
undefined. */

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // undefined - pois o objeto só tem por padrão o "__proto__"
console.log(ferrari.__proto__) // {}
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

function MeuObjeto() {}
// Ambos são fuctions
console.log(typeof Object, typeof MeuObjeto)
// Amobos são objetos
console.log(Object.prototype, MeuObjeto.prototype)