/* Padrão middleware, mais conhecido como chain of responsability 
(Cadeia de responsabilidade). */

const passo1 = (ctx, next) => {
    ctx.valor1 = "middleware1"
    next()
} 

const passo2 = (ctx, next) => {
    ctx.valor2 = "middleware2"
    next()
} 

const passo3 = ctx => { 
    ctx.valor3 = "middleware3" 
} 

const exec = (ctx, ...middlewares) => {
   const execPasso = indice => {
    /* "Não foi necessario usar a condifional if"
    Se o array "middlewares não estiver vazio (true) e indice menor 
    que middlewares.length, então execute, é um pouco estranho mas o 
    ultimo && indica a execução das funções do array. */
       middlewares && indice < middlewares.length && 
        /* Na linha abaixo esta sendo executado cada função do array,
        passando o objeto "ctx" e uma função execPasso() que será 
        executado de maneira recursiva. */
        middlewares[indice](ctx, () => execPasso(indice + 1))

        /* O código dentro da função "execPasso()" poderia ser escrito 
        da maneira abaixo  que funcionaria  perfeitamente e é mais legivel.  */
        /* if(middlewares && indice < middlewares.length) {
            middlewares[indice](ctx, () => execPasso(indice + 1))
        } */
   } 
   execPasso(0)
}

const ctx = {};
exec(ctx, passo1, passo2, passo3)
console.log(ctx)