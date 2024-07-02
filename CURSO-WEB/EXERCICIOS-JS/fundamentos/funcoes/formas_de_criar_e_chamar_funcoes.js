// Funções em JS é um First-class Object (Citezens)
// Higher-order function

// MANEIRAS DE CRIAR E UTILIZAR FUNCTIONS

// ------------------------------------------------------------------------ //

// Forma literal - "Function declaration"
/* Declarando a função dessa maneira você pode chama-la 
antes da declaração, pois o interpretador le primeiro essas 
funções durante a execução. */
console.log(func1())
function func1() { return 'Forma literal'}
console.log(func1())

// ------------------------------------------------------------------------ //

// Armazenar função em uma variável - "Function expression"
/* cria-se uma variavel com o nome da função e atribue 
uma função anônima para essa variável*/
const func2 = function () { return 'Armazena função em variável' }
console.log(func2())

// ------------------------------------------------------------------------ //

// Armazena função em array
/* Você pode criar a função diretamente no array ou passar 
função já existente */
const array = [function(a, b) { return a + b}, func1, func2]
/* Pegando a possição 0 do array que é uma função e passando 
valores por parametro para a função */
console.log(array[0](2, 4))

// ------------------------------------------------------------------------ //

// Armazenar função em atributo de objeto
const obj = {} // Criando objeto
// Criando atributo "falar" no aobjeto e atribuindo função anônima para ele //
obj.falar = function () { return 'opa'} 
console.log(obj.falar())

// ------------------------------------------------------------------------ //

// Passar função como parametro
// A função "run" esta recebendo uma função nomeada como "fun" como parametro
function run(fun) {
    fun() // Executando função recebida no parametro
}
// Chamando função "run" e passando uma função como parametro
run( function () { console.log('Executando...') } )

// ------------------------------------------------------------------------ //

// Uma função pode retornar ou conter uma outra função
/* A função soma recebe dois parametros e retorna outra 
função que recebe um parametro*/
function soma(a, b) {
    return function(c) {
        console.log(a, b, c)
    }
}
/* Foi chamada a função soma e passa os 2 parametros esperados 
e em seguida foi passado mais um parametro para a função detro de soma*/
soma(1, 2)(3)
// Atribuindo retorno da funçaõ "soma" para para uma variável/função
const funcaoDeRetorno = soma(1, 2)
// Chamando função nova
funcaoDeRetorno(3)