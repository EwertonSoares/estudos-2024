// Importando modulos/arquivos
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// Acessando metodos e variaveis de valores importados
console.log(`Modulo A: ${moduloA.ola}`);
console.log(`Modulo A: ${moduloA.ateLogo}`);
console.log(`Modulo A: ${moduloA.benVindo}`);
console.log(`Modulo B: ${moduloB.bomDia}`);
console.log(`Modulo B: ${moduloB.boaNoite()}`);