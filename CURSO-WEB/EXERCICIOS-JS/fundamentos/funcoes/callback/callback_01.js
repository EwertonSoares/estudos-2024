/* A ideia de "callback" é passar uma função para outra função e quando 
determinado evento acontecer essa função que foi passada seja disparada.
Essa função "callback" pode ser chamada uma vez ou várias vezes dependendo 
do contexto no qual a função foi passada. 

Ou seja callback nada mais é que passar uma função que será chamada quando um evento acontecer. 

Nos exemplos abaixo vemos a execução de um evento de loop, sempre que é encontrado um novo 
elemento no array ele dispará a funçao callback "imprimir" ou a função anônima */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}

// O forEach por padrao retorna 3 elementos.
// Primeiro: retorna o valor da posição, no caso posição 0 é "Mercedes"
// Segundo: retorna o indice da posição, no caso posição 0 é indice 0
// Terceiro: retorna todos valores do array
fabricantes.forEach(imprimir)

// É possivel pegar os valores ou só os indices de um array usando arrow function
// No caso abaixo estamos pegando os valores do array
fabricantes.forEach(fabricante => { console.log(fabricante) })