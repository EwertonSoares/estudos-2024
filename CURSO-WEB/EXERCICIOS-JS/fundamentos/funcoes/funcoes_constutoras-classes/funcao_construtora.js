/* Função construtoras funcionam de maneira muito parecida com classes,
é basicamente uma classe criada apartir de uma funçao. */
function Carro(velocidadeMaxima = 200, delta = 5) {
    // Criando atributo privado
    // Se cria atributos publicos usando const ou let
    let velocidadeAtual = 0

    // Criando metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Criando mais 1 metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Criando um novo carro
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

// Criando mais um carro
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())