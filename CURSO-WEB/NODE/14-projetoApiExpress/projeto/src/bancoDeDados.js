const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    // If o produto não tiver id
    if (!produto.id) {
        produto.id = sequence.id
    }
    
    return produtos[produto.id] = produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
module.exports ={
    getProduto,
    getProdutos,
    salvarProduto,
    excluirProduto
}