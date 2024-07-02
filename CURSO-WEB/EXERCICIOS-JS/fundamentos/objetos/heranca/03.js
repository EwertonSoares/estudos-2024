/* Usando "Object.create()" para criar objetos e estabelecer herança. */
const pai = { nome: "Pedro", corCabelo: "preto"}

/* Passando o obejeto "pai" como parametro para o "Object.create()" 
significa que o novo objeto "filha1" irá herdar tudo do objeto "pai". */
const filha1 = Object.create(pai)
// Setando novo valor para "nome" senão herdara o "nome" do objeto "pai",
filha1.nome = 'Ana' 
console.log(filha1.nome, filha1.corCabelo)

///////////////////////////////////////////////////////////////////////////////////////////

/* É possivel criar um novo objeto passando o objeto "pai" e 
um objeto com novo atributos. */
// Value - Para definir o valor do atributo criado
// writable - Para definir se o valor do atributo pode ser ou não alterado
// enumerable - Para definir se o atributo sera mostrado na chamada de outros metodos
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true},
    idade: { value: 12, writable: false, enumerable: true}
})

console.log(filha2.nome, filha2.idade, filha2.corCabelo)

/* Tanto o valor de "nome" quanto de "idade" não sofrerão alteração pois ambos os atributos 
foram criados com "writable: false". */
filha2.nome = 'Carla'
filha2.idade = 15
console.log(filha2.nome, filha2.idade, filha2.corCabelo)


// Para listar todas as chaves criadas em cada objeto
// As chaves dos objetos pai não aparecem nessa listagem
// Se o valor colocado em "enumerable" fosse false a chave não apareceria na listagem
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Para listar todas os valores das chaves criadas em cada objeto
// Os valores dos objetos pai não aparecem nessa listagem
// Se o valor colocado em "enumerable" fosse false o valor não apareceria na listagem
console.log(Object.values(filha1))
console.log(Object.values(filha2))

// Usando o "for" serão exibidos todos os valores do objeto incluse o que vem do objeto pai.
/* Usando o metodo "hasOwnProperty()" é possivel verificar se o atributo pertence ao proprio objeto 
ou se ele veio por herança. */
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}