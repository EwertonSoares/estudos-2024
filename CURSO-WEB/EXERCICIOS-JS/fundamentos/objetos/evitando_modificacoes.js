/* "Object.preventExtensions" é uma maneira de criar objetos 
com atributos fixos, ou seja não poderá ser mais adicionados 
atributos a esse objeto. 
Ainda assim poderá ser alterado os valores dos atributos e
tambem podeerá ser deletado atributos.  */
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

/* "Object.isExtensible" veriica se o objeto é ou não estensivel, se é 
possivel adicionar novos atributos a ele. */
console.log('Estensivel ', Object.isExtensible(produto)) // False

// Pode-se alterar o valor de um atributo existente
produto.nome = 'Borracha' 

// Não é permitido adicionar atributo novo ao objeto
// Nada acontecerá ao objeto nessa na linha abaixo.
produto.descricao = 'Borracha escolhar branca'

// É possivel excluir um atributo existente
delete produto.tag

console.log(produto)

// Mais um meto de "Object"

// "Object.seal()"
/* Esse metodo sela o objeto não permitindo adição de 
novos atributos (Extenção) e tambem não permite a deleção 
de atributos existentes no objeto. Mas permite a alteração 
dos valores dos atributos existentes no objeto. */
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // elando objeto

// "Object.isSealed" Verifica se o objeto esta selado ou não 
console.log('Selado: ', Object.isSealed(pessoa)) // true

/* Na linha abaixo nada acontecerá no objeto, pois como ele 
esta selado não é permitido a adição de novos atributos ao objeto. */
pessoa.sobrenome = 'Silva'

/* Na linha abaixo nada acontecerá no objeto, pois como ele 
esta selado não é permitido a deleção de atributos do objeto. */
delete pessoa.nome

/* na linha idade do objeto sera alterada para 29, pois mesmo selado 
é permitido a alteração de valores de atributos já existentes no objeto. */
pessoa.idade = 29

console.log(pessoa)

// Mais um meto de "Object"

// "Object.freezee()"
/* O metodo "Object.freeze" congela todo o objeto, evitando qualquer 
tipo de modificação no objeto. */
const carro = { nome: 'Ferrari', modelo: 'F40' }
Object.freeze(carro)

/* Nenhuma das ações abaixo seão realizadas, pois o objeto esta
totalmente congelado para modificações. */
carro.valor = 15000000
carro.nome = "Volvo" // Esse valor não será atribuido pois o objeto esta congelado.
delete carro.modelo
console.log(carro)