function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

// Criando objeto usando o 'new'.
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('até logo', 456)
console.log(aula1, aula2)

// Simulando como o 'new' funciona
function novo(func, ...params) {
    const obj = {} // Criando objeto novo
    // Prototipo/__proto__ do "obj" aponta para o prototype da fução passada
    obj.__proto__ = func.prototype 
    /* Para a função 'apply()' esta sendo passado como o parametro 
    o contexto/this que é o "obj" e a  lista de parametros  */
    func.apply(obj, params)
    return obj
}

// Testando o metodo "novo()" com se fosse um 'new'
const aula3 = novo(Aula, "Ola alunos", 789)
const aula4 = novo(Aula, "Adeus alunos", 632)
console.log(aula3, aula4)

