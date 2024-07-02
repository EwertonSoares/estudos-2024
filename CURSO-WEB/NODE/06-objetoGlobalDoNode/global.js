/* É possivel adicionar objetos e atributos dentro do 
objeto global para uso em toda sua aplicação. */

/* Recomendavel o uso de freeze() para evitar modificações em 
um objeto criado dentro do objeto global. */
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
}
