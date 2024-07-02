// Recurso ascionado no ECMA SCRIPT 2015

//Objeto pessoa
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

// Usando destructuring é possivel remover valores de dentro do objeto 
// as variaveis nome, e idade receberão os valores vindo das variaveis nome e idade do objeto pessoa
/* ATENÇÃO - Os nomes das variaveis que receberão os valores tem que ser o mesmos que se encontram
dentro do objeto, caso contrario as variaveis ficarão com valor undefined */
const { nome, idade } = pessoa
console.log(nome, idade)

// Para desetruturar / retirar valores de atributos de objetos dentro de objetos]
// endereco é um objeto dentro do objeto pessoa 
const { endereco: {logadouro, numero} } = pessoa
console.log(logadouro, numero)

/* Dessa maneira é possivel criar variaveis com nomes diferentes das variaveis encontradas 
dentro do objeto */
// variableName recebera o valor da variavel nome do objeto pessoa
// variableIdade recebera o valor da variavel idade do objeto pessoa
const {nome: variableName, idade: variableIdade} = pessoa
console.log(variableName, variableIdade)

/* Caso não exista um atributo dentro do objeto o retorno será UNDEFIMED a não ser qie seja tribuido 
um valor padrão de retorno para o atributo */
// Sobrenome retornara como undefned pois o atributo não existe no objeto pessoa
/* bemHumorada retornara como true pois o atributo não existe no objeto pessoa e foi definido valor
true como padrão */
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)