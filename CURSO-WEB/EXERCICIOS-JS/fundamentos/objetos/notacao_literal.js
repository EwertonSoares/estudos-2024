const a = 1
const b = 2
const c = 3

// Anteriormente
const obj1 = { a: a, b: b, c: c }
// Atualmente com ECMA SCRIPT 2015
const obj2 = { a, b, c }
console.log(obj1, obj2)

// Outra maneira de criar objeto e nomear seus atributos
const nomeAtributo = 'Nome'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

// Adicionando dunções a um objeto
const obj5 = {
    // Anteriormente
    funcao1: function() {
        // ...
    },
    // Atualmente com ECMA SCRIPT 2015
    funcao2() {
        // ...
    }
}