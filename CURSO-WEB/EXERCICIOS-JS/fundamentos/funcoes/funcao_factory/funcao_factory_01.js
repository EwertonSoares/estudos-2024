// Função factory é uma função que tem com objetivo criar objetos
// Factory simples
function criarPessoa() {
    return {
        nome: null,
        sobrenome: null
    }
}

console.log(criarPessoa())

// Extanciando um objeto pessoa a partir de uma function factory
const pessoa1 = criarPessoa()
pessoa1.nome = 'Maria'
pessoa1.sobrenome = 'Das graças'
console.log(pessoa1)
