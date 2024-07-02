// "node-schedule" biblioteca usada para criar tarefas agendadas
const schedule = require('node-schedule')

// Criando agenda para execução de tarefa " '*/5 * 11 * * 6' "
// 1º parametro "*/5" que a excução será realizada a cada 5 segundos.
/* 2º parametro foi usado "*" para ignorar em qual minuto a tarefa será 
executada, Ou sejaa tarefa sera executada em qualquer minuto. */
// 3º parametro "12" indica em que horas será a execução da tarefa
/* 4º parametro foi usado "*" para ignorar o dia do mês que a tarefa será 
executada. Ou seja a execução da tarefa pode ocurrer em qualquer dia do mês. */
/* 5º parametro foi usado "*" para ignorar o mês que a tarefa será executada. 
Ou seja a execução da tarefa pode ocurrer em qualquer mês. */
/* 6º parametro "6" que a excução será realizada no sabado o sexto dia da semana. 
A contagem é a partir de domingo (0). */
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6', function () {
    console.log('Executando tarefa 1', new Date().getSeconds())
})

// Para cancelar a execução de uma tarefa
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa')
}, 20000)

// Outra maneira de criar tarefa
// É possivel setar valores para essa regra para que seja executado de forma recorrente.
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)] // Para executar de segunda a sabado
regra.hour = 12 // Sempre executar ao meio dia / 12 horas
regra.second = 30 // // Sempre executar no segundo 30

// Passando "regra" para o metodo "scheduleJob(}"
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2', new Date().getSeconds())
})
