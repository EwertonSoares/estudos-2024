/*  quando se cria um objeto atraves de uma função construtora 
o "__proto__" sempre apronta para "prototype". */
// __proto_ é a forma que os objetos tem para referencias o pai/prototype
function MeuObjeto() {}
// A função construtora tem "prototype"
console.log(MeuObjeto.prototype) // è um {}

/* Objetos criados a partir das funções construtoras tem "__proto__" 
que apontam para o "prototype" da função construtora. */
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true
console.log(obj2.prototype) // Undifined 

/* É possivel criar atributos diretamente no prototype dessa maneira 
todos os objetos terão acesso a esses atributos por herança. */
MeuObjeto.prototype.nome = 'anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

/* Objt1 herdar a função falar de "MeuObjeto.prototype" pois 
ele foi criado a partir desse objeto e herda tudo dele. */
obj1.falar() // Meu nome é anônimo

// Mas é possivel modificar o valor de alguma propriedade
/* O valor só sera alterado par ao objeto atual, 
no pai o valor permanecerá o mesmo. */
obj2.nome = 'Rafael'
obj2.falar() // Meu nome é Rafael


const obj3 = {}
/* Pode-se atribuir a referencia/property de um objeto para outro,
fazendo com que o novo objeto herde tudo. */
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo - Todo objeto e função tem um prototype ou __proto__
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Function.prototype === Object.prototype) // true

// "Object.prototype" é a raiz de todos
/* "Object.prototype.__proto__" é um atributo que existe, ou seja não é undefined,
mas não aponta para nada */
console.log(Object.prototype.__proto__ === null) // null