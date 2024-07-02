function tratarErro(erro) {
    // Pode ser lançado qualquer coisa até mesmo um objeto
    throw new Error("Erro ao tentar formatar para maiusculo "+ erro.message)
}

function imprimirMaiusculo(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    }
}

const obj = { nome: 'Ewerton'}
imprimirMaiusculo(obj)