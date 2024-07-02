/* A diferença principal entre o metodo "call" e o "apply" é a maneira 
de passar os parametros, ambos fazem o mesmo que é executar funções. */
// A função "getPreco" foi criada globalmente lo o "this" é global
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}

// A função "getPreco" e o objeto "produto" passa, a ter o mesmo escopo
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}


// Sentando valores globais para o atrinuto preco e desconto
global.preco = 20
global.desconto = 0.1
// Esta sendo chamado a função diretamento. Serão pegos os valores de preco e desconto golbal
console.log(getPreco()) 
/* Esta sendo chamado a função a partir 
do objeto produto, sendo assim os escoos são diferentes.
Pois aqui ele pega o preço e desconto do produto*/
console.log(produto.getPreco())

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Existem duas outras maneiras de execultar essa função "getPeco" que é usando os metodos "call" e "apply" */
const carro = { preco: 49990, desconto: 0.20 }

// Ussando o metodo "CALL"
// Passa-se para a função "call" o contexto que deseja executar, nesse caso o contexto é o objeto "carro"
console.log(getPreco.call(carro))

/* Usando o metodo 'CALL' é possivel passar os parametros esperado 
pelo metodo chamada diretamento, no caso o metodo é o "getPreco". */ 
// Primeiro passa-se o contexto, no caso o contexto é o objeto "carro
// Depois foi passado o "imposto" e a "moeda" .
console.log(getPreco.call(carro, 0.17, '$'))


// Ussando o metodo "APPLY"
// Passa-se para a função "apply" o contexto que deseja executar, nesse caso o contexto é o objeto "carro"
console.log(getPreco.apply(carro))

/* Usando o metodo 'APPLY' é possivel passar os parametros esperado 
pelo metodo chamada diretamento em um array, no caso o metodo é o "getPreco". */ 
// Primeiro passa-se o contexto, no caso o contexto é o objeto "carro
// Depois foi passado o "imposto" e a "moeda" em um array.
console.log(getPreco.apply(carro, [0.17, '$']))