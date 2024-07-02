const sequencia = {
    /* Usar underline antes do nome da variavel é uma Convenção que mostra 
    que essa variavel é pretendida para acessar somente internamente.
    Não é algo que obrigue a não alteração da variavel.  */
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this.valor) {
            this._valor = valor 
        }
    }
}

// Na chamada da variavel valor não é necessario a adição do underline
/* Cada vezes que vc chama a variavel "sequencia.valor" é acresentado 1 
de acordo com o que foi definido no metodo get. */ 
console.log(sequencia.valor, sequencia.valor, sequencia.valor)

/* Não é necessario e nem possivel chamar o metodo "set" para adicionar um novo valor 
a variavel "valor", ao fazer uma atribuição convencional internamente 
no objeto são chamados os metodos "get" e "set" */
sequencia.valor = 1000 // A partir daqui o valor da variavel é 1000
console.log(sequencia.valor, sequencia.valor) // Não é necessario e nem possivel chamar o metodo "get"

/* Há um if no metodo "set" que não permite a atribuição de um valor menor 
do que o que já há na variavel. Ou seja a variavel continuará contendo o valor 1000  */
sequencia.valor = 900 // Não é necessario e nem possivel chamar o metodo "set".
console.log(sequencia.valor, sequencia.valor)
