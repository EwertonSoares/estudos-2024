const nome = 'Rebeca'
// Concatenação comum
const concatenacao = 'ola ' + nome + '!'

// Concatenaçao com template string
const template = `Olá ${nome}!`
console.log(concatenacao, template)

// Usando expressoes dent1ro de template string
console.log(`1 + 1 = ${1+1}`)