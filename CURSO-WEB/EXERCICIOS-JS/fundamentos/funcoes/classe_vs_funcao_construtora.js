// Criando uma classe
/* Dependendo do escopo onde as classes são extendidas ela pode perder 
a referencia ao "this". */
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    // Criando metodo
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const pessoa1 = new Pessoa('Ewerton Soares')
pessoa1.falar()

// Criando function factory
// Function factory sempre retornam um objeto
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

// Extanciando um objeto pessoa a partir de uma function factory
const pessoa2 = criarPessoa("João")
pessoa2.falar()
