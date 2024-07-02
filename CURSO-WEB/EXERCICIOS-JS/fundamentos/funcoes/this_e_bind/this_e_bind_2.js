// Dessa maneira havera conflito com o contexto do "this"
// Pois a funçao Pesspa1 e a função anônima tem contextos diferentes
function Pessoa1() {
    // Esse "this" referece a função pessoa
    this.idade = 0

    setInterval(function() {
        // Esse "this" referece a função anônima
        // Sendo assim "idade" sera undefined
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa1


/* Dessa maneira sera feito um bind e o "this" na função anonima 
tera o mesmo contexto que a função Pessoa2 */
function Pessoa2() {
// Esse "this" referece a função pessoa
    this.idade = 0

    setInterval(function() {
        /* Esse "this" referece a função anônima mas com o bind ambos
        os contexto estao apontando para Pessoa2 */
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}   
new Pessoa2


/* Dessa maneira "this/self" sempre apontarão para o contexto da função Pessoa3 */
function Pessoa3() {
    // Esse "this" referece-se a função Pessoa3
        this.idade = 0
    
        self = this // Ambos reference a função Pessoa3
        setInterval(function() {
            self.idade++
            console.log(self.idade)
        }, 1000)
    }   
    new Pessoa3