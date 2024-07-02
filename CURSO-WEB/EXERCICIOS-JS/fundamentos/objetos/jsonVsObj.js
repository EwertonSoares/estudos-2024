const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }

/* Ao excutar "JSON.stringify(obj)" o "obj" é formatado para Json,
mas as funções não são convertidas, pois JSON é um modelo de 
somente dados. */
console.log(JSON.stringify(obj))

// 'JSON.parse()' è usado para converter um JSON em um Objeto
const json = '{ "a": 1,"b": 2,"c" :3}'
console.log(JSON.parse(json))