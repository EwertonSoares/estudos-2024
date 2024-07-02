// Cria um array com o nome "a" que recebe o valor de 10
const [a] =  [10]
console.log(a);

// è possivel ignorar elementos ao fazer destrutiring com arrays
// n1 vai receber 10
// segundo elemento "," vai receber 7
// n3 vai receber 9
// quarto elemento "," vai receber 8
// n5 vai ser undefined pois o array só tem 4 posições
// n6 por padrão vai receber 0
const [n1, , n3, , n5, n6 = 0] =  [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

// Abaixo há um array que tem 2 elementos
/* O primeiro elemento esta sendo ignorado e o segundo é um outro array com
2 elementos onde o primeiro elemento tambem esta sendo ignorado e o segundo é nota */
// A variavel nota recebera o valor 6
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)