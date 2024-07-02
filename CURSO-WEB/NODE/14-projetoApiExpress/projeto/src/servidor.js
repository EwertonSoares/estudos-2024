/* Configurando o Express, o framework web para criação
dos webservices. */

// É necessario o uso de uma porta de rede
// 1 - Porta é executada por um processo do computador
/* 2 - A porta é um numero que faz associação com um processo 
que esta sendo executado pelo computador. */
/* 3 - Computadores precisam de portas para enviar e receber 
informações atravez da rede */
const porta = 3003

// Importando framework express
const express = require('express') 
const app = express() // Extraindo express
const bancoDeDados = require('./bancoDeDados')

// Para resolver problema de parseamente de JSON para objeto
// Tambem pode ser usado o "body.parse()" porem esta deprecado.
app.use(express.json())
app.use(express.urlencoded({ 
    extended: true 
}))

/* Usando a função next() do padrão middleware, a requisição é 
feita feita o metodo GET é executado e o proximo metodo GET com 
a mesma rota '/produto' é chamado para dar sequencia na cadeia 
de responsabilidade. */
/* app.get('/produtos', (req, res, next) => {
    console.log('MiddleWare 1')
    next()
}) */

// Usando metoo GET para buscar "Produtos"
/* É percepitido que o express trabalha com padrão de projetos 
middleware, pois eles espera uma função next() para seguir com 
a cadeia de resposablidade. 
No caso abaixo o metodo next não foi utilizado. */

// Buscando todos os produtos
app.get('/produtos', (req, res, next) => {
    // Objeto será convertido para JSON pelo metodo "res.send()". 
    const produtos = bancoDeDados.getProdutos()
    res.send(produtos) 
})

// Buscando prodito por Id
app.get('/produto/:id', (req, res, next) => {
    // Objeto será convertido para JSON pelo metodo "res.send()". 
    const produto = bancoDeDados.getProduto(req.params.id)

    res.send(produto) 
})

// inserindo produto
app.post('/produtos', (req, res, next) => {
    const body = req.body
   const produto =  bancoDeDados.salvarProduto({
        nome: body.nome,
        preco: body.preco
    })

    res.send(produto) 
})

// Atualizando produto
app.put('/produto/:id', (req, res, next) => {
    const body = req.body
    const produto =  bancoDeDados.salvarProduto({
        id: body.id,
        nome: body.nome,
        preco: body.preco
    })

    res.send(produto) 
})

// Excluindo produto
app.delete('/produto/:id', (req, res, next) => {
   const produto = bancoDeDados.excluirProduto(req.params.id)
   res.send(produto) 
})

// Indica em qual porta o processo, sua api vai executar.
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})