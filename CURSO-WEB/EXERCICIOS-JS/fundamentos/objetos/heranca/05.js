// Todos os intem abaixo são do tipo function
console.log(typeof String) // É uma function
console.log(typeof Array) // É uma function
console.log(typeof Object) // É uma function

/* É possivel adicionar novos metodos há uma String diretamente no 
prototype dela. 
Abaixo foi criado o metodo "reverse()". */
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Ewerton Soares da silva'.reverse())

// Tambem consigo criar funçoes dentro de Array
// Foi criado o metodo "first()'
Array.prototype.first = function() {
    return this[0]
}
console.log([1,2,3.4,5].first())
console.log(['a', 'b', 'c'].first())

// Tambem é possivel fazer sobrescrita de metodo
// Foi feto uma sobresctita no metodo "toString(). "
// Não é comenda fazer isso, pois altera o comportamento da String
String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Ewertonnsilva'.reverse())