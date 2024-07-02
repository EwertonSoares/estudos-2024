// Função factory é uma função que tem com objetivo criar objetos
// Factory simples
function criarProduto(nome, preco = 0) {
    return {
        //nome,
        //preco
        nome: nome,
        preco: preco
    }
}

// Extanciando um objeto produto a partir de uma function factory
const produto1 = criarProduto('Meias', 15.00)
console.log(produto1)
