/* Caso você execute o arquivo e passe um flag "-a" 
é possivel pegar e ver a flag passada. */
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    // Saida pardão
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    // Saida pardão
    process.stdout.write('Informe seu nome: ')
    // Entrada pardão
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}