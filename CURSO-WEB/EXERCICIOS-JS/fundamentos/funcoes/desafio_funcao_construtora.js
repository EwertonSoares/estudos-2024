/* Se não fosse usado o "this" o acesso a variavel "nome" seria perdido 
apos o retuen da função anônima, pois essa variavel ficaria como undefined */
function Pessoa(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Joaquin')
pessoa1.falar()

// Exemplo sem o uso do "this"
function Pessoa(nome) {
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = new Pessoa('João')
pessoa2.falar()
/* Sem o uso do "this" não  seria possivel fazer isso
pois a variavem nome seria undefined.
Dentro do metodo falar ele da return e finaliza a execução e
perder a variavel "nome" pois ela é local diferente do this. */
console.log(pessoa2.nome)