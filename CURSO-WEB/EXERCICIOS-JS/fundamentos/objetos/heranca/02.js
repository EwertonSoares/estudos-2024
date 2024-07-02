// Cadeia de prototipo (prototype chain)
/* Usando "__proto__:" você consegue fazer herança, fazendo com que o 
objeto filho herde de pai que herda de avo. */

/* Avô irá herdar o "attr0" pois o "Object.prototype" é raiz. 
E todo objeto herda dele.
Não é recomendado criar atributos direto para no "Object.prototype",
como foi criado na linha abaixo. */
Object.prototype.attr0 = "0"

const avo = {attr1: 'A'} // Avô herda de "Object.prototype" que é o objeto/__proto__ raiz
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho) // Filho só tem um atributo
// Você consegue acessar atributos por herança
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0)


// Outra maneira de heraça
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    /* Shadowing - Esse atributo ira sobrescrever o valor do atributo pai ao fazer a herança. */
    velMax: 324,

}

/* Aqui esta sendo estabelecidada a relação entre dois objetos.
Ou seja esta sendo definida a herança, o objeto "ferrari" vai herdar do objeto "carro".  */
// Primeiro parametro o objeto filho que vai herdar do pai
// Segundo parametro o objeto para que vai dar herança
Object.setPrototypeOf(ferrari, carro)

const volvo = {
    modelo: 'V40',
    /* Ao fazer a herança quero que o metodo status() desse objeto seja utilizado 
    ao inves do metodo status() do objeto pai, para isso usase o super.status(). */
    status() {
        return `${this.modelo}: ${super.status()}`
    }

}

/* Aqui esta sendo estabelecidada a relação entre dois objetos.
Ou seja esta sendo definida a herança, o objeto "volvo" vai herdar do objeto "carro".  */
// Primeiro parametro o objeto filho que vai herdar do pai
// Segundo parametro o objeto para que vai dar herança
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(30)
console.log(ferrari.status())

/* Ao logar é possivel ver que para o objeto volvo o funcionamento do metodo status() 
é diferente. */
volvo.acelerarMais(20)
console.log(volvo.status())