// Dentro do NODE cada arquivo é um modulo
/* A priori tudo que se escreve dentro de um modulo fica dentro e 
visivel apenas dentro do modulo, para que seja usado deve-se se exportar o modulo. */

/* Maneiras de exportar variaveis para outros modulos/arquivos 
acessarem-las. */
this.ola = 'Fala pessoal'
exports.benVindo = 'Bem vindo ao node'
module.exports.ateLogo = 'Até proximo exemplos'
