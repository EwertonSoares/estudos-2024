// Modulo usado para leitura de arquivos
// Modulo já vem instalado no NODE por padrão
const fs = require('fs')

// __dirname é uma constante traz o nome do diretório atual
const caminho = __dirname + '/arquivo.json'

// Leitura de forma sincrona
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// Leitura de forma assincrona
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Outra maneira de carregar um arquivo JSON de forma sincrona
const config = require('./arquivo.json')
console.log(config.db)


// fs.readdir busca todo o conteudo arquivos e pastas do diretório atual de forma sincrona
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})