/* Usando arrow function o "this" permanece apontando para o contexto Pessoa, 
pois a função que esta usando "this" é uma arrow function que foi criada dentro de Pessoa, 
sendo assim a arrow function não perde a referencia de pessoa. */
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa