// Aprendendo algumas funções/metodos importantes do "Object"

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Para retornar um array com todas as chaves/atributos do objeto
console.log(Object.keys(pessoa))

// Para retornar um array com todas os valores do objeto
console.log(Object.values(pessoa))

/* Para retornar um array de array com todas as chaves e 
valores do objeto. 
Nesse caso o array retornado será composto por 3 arrays 
contendo em cada uma das 3 posições a chave e valor de 
cada atributo do objeto.  */
console.log(Object.entries(pessoa))

// Acessando o array de array e usando destructing no array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/* Você pode definir uma propriedade/atributo e tambem adicionar algumas 
caracteristicas especificas para ela. */
Object.defineProperty(pessoa, 'dataDeNascimento', {
    /* "enumerable" - Define se a propriedade vai ser listada quando algum 
    outro metodo acessar o objeto pessoa. */
    enumerable: true,
    writable: false, // Define se o atributo será modificavel ou não
    value: '01/01/2019' // Define o valor do atributo
})

// Não alterará o valor do atributo pois foi setado como "writable: false"
pessoa.dataDeNascimento = '14/04/1995'
console.log(pessoa.dataDeNascimento)

// lista tudas chaves do objeto pessoa inclusive o atributo "dataDeNascimento"
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
/* Com o metodo "Object.assign" é possivel atribuir varios objetos 
para um objeto de destino. */
const objeDeDestino = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a: 4}
/* O obj3 terá o conteudo de todos os 3 objetos acima.
Como o "objeDeDestino" e o "obj2" tem um atributo com o mesmo nome "a",
o valor do ultimo valor adicionado é ficara como valor da propriedade "a"
Ou seja o valor de "a" que inicialmente o valor era "1" apos a concateção
do "obj2" passará a ser "4". */
const obj3 = Object.assign(objeDeDestino, obj1, obj2)
console.log(obj3)

/* O metodo "Object.freeze" congela todo o objeto, evitando qualquer 
tipo de modificação no objeto. */
Object.freeze(obj3)
obj3.c = 1234 // Esse valor não será atribuido pois o objeto esta congelado.
console.log(obj3)