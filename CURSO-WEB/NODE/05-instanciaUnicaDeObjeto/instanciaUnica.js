// Uma factory retorna uma nova instancia, um novo objeto
// É uma factory, pois é uma função que retorna um objeto
/* Sempre que ser chamado a função desse modulo o retorno 
será um objeto com instancias diferentes. */
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}