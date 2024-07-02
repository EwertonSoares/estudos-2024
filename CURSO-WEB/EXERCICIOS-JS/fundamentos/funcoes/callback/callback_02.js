const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
/* Sem usar callback a função ficar maior pois é necessario cria loops, condicionais 
e fazer adição dos elementos no array */
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
// Com callback temos uma função mais enxuta
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

// É possivel jogar a função em uma variavel para reutiliza-la caso necessario
const funcaoCallback = nota => nota < 7
const notasBaixas3 = notas.filter(funcaoCallback)
console.log(notasBaixas2)