/* Dentro do modulo/arquivo chamado a uma função, você pode 
chamar essa função atravez do require já passando os prametros 
esperados, como feito abaixo. */
const saudacao = require('./passandoParametros')('Ana', 'Lucas', 'João')
console.log(saudacao)

/* Tambem é possivel adicionar a função vinda do require em uma 
variavel e depois chamar essa função passando os parametros esperados, 
como no exemplo abaixo. */
const saudacao2 = require('./passandoParametros') // Atribuindo a função
console.log(saudacao2('Ewerton', 'Neidys', 'Lyón')) // Passando os parametros