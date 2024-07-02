const fs = require('fs')

const produto = {
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15
}

// fs.writeFile cria e permite a escrita em aquivos
/* Vai ser gerado um arquivo nomeado "arquivoGerado.json" que será 
salvo dentro do diretorio atual "__dirname" com os atributos e 
valores do objeto "produto" convertidos para JSON. */
fs.writeFile(__dirname + '/arquivoGerado.json', 
    JSON.stringify(produto), err => { 
        console.log(err || 'Arquivo gerado com sucesso.')}
)