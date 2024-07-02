/* É possivel criar funções sem parametros e passar parametros 
na chamada dessa função */

/* "arguments" é um array interno que contem todos argumentos 
passados para a função */
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

// Pode-se chamar a função sem passar parametro o retorno será 0
console.log(soma())

/* Pode-se chamar a função passando um unico parametro o 
retorno será o argumentos/parametros passado */
console.log(soma(5))

/* Pode-se chamar a função passando varios parametros o 
retorno será a soma dos argumentos/parametros passados */
console.log(soma(5, 2, 5.4, 9, 7.3))

/* Pode-se chamar a função passando varios parametros o 
retorno será a soma dos argumentos/parametros passados 
e concatena com a "string" passada */
console.log(soma(5, 2, 5.4, 9, "Teste"))