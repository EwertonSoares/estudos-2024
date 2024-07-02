/* Ao colocar o nome da biblioteca diretamente "lodash", 
o codigo automaticamente procura dentro da pasta node 
modules o index.js da pasta "lodash" e carrega o arquivo. */
const _ = require('lodash')
setInterval(() => { 
    console.log(_.random(1, 1000)) 
}, 2000)