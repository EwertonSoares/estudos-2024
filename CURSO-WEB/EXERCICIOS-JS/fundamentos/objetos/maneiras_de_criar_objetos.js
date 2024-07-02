// Fotrma literal
const obj = {}
console.log(obj)

// A partir da função "new Object"
const obj2 = new Object
console.log(obj2)

// A partir de uma função construtora
function Produto(nome, preco, desc) {
    // Usando o "this" significa que o atributo é publico
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebool', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


// Criando objeto atraves de factory functions
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Criar objetos atraves da funçã/metodo "Object.create"
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome)

// Pode-se usar o metodo "JSON.parse" para converter json em objeto
const fromJson = JSON.parse('{"info": "Convertendo JSON"}')
console.log(fromJson.info)

// CURIOSIDADE
/* Se você quiser que seu objeto não seja modificado,
você pode usar o metodo "Objecte.freeze", isso congelará o objeto */
const objetoCongelado = Object.freeze({ nome: 'Ewerton' })
objetoCongelado.nome = 'Joaquim' // Atributo não sera modificado
console.log(objetoCongelado)