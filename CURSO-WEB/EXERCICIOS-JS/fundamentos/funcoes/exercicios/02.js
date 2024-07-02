function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero' //  Os três lados são iguais
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles' // Dois lados iguais
    }  { 
        return 'Escaleno' // Todos os lados são diferentes
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));