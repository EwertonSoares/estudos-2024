// Node faz cache dos modulos - Mantem uma instancia unica
/* Sempre que ser chamado o objeto desse modulo a instancia 
sempre será a mesma. */
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}