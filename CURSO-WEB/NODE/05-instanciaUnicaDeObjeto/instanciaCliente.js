/* Nas linha abaixo o arquivo/modulo "mesmaInstancia" foi 
chamado duas vezes, logo ele retornará a mesma instancia para 
as duas variaveis "contadorA" e "contadorB". */  
const contadorA = require('./mesmaInstancia')
const contadorB = require('./mesmaInstancia')

/* Para chamar a função que esta dentro do arquivo/modulo 
"instanciaUnica" é necessario adcionar "()" depois do "require()". 
Abaixo a atribuições para duas variaveis, ambas terão instancias 
difewrentes. */
const contadorC = require('./instanciaUnica')()
const contadorD = require('./instanciaUnica')()

/* O valor de "contadorB" será alterado ao chamar o metodo "inc()" pois 
ele possui a mesma instancia que "contadorA".  
O valor inicial era 1. */
contadorA.inc() // Valor passa a ser 2
contadorA.inc() // Valor passa a ser 3
console.log(`B: ${contadorB.valor}`) // Valor é 3
console.log(`A: ${contadorA.valor}`) // Valor é 3

/* O valor de "contadorD" não será alterado, pois ele não possui a mesma 
instancia que contadorC.
O valor inicial era 1. */
contadorC.inc() // Valor passa a ser 2
contadorC.inc() // Valor passa a ser 3
console.log(`D: ${contadorD.valor}`) // Valor permanece como 1
console.log(`C: ${contadorC.valor}`) // Valor foi alterado para 3