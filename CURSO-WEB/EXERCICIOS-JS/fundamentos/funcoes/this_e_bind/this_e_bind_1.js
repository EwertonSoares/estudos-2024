// O "this" pode variar dpendo do contexto onde a função é criada
// No objeto abaixo o "this" faz referencia ao contexto do objeto
/* Sem o "this" a funçao "falar()" logaria "saudacao" como undefined, 
pois não encontraria esse atributo detro da função pois ele pertence ao objeto */
const Pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
Pessoa.falar()

/* Nesse caso será logado un valor undefined pois o "this" não estará 
mais no contexto do obejeto e sim no contexto da nova função "falar()",
sendo assim "this.saudacao" não existe no contexto atual. A função "falar()" 
esta sendo criada dentro de um novo objeto (Global/Window), ou seja um novo contexto,
sendo assim "this" passa a apontar para esse novo objeto. */
const falar = Pessoa.falar
falar()

// Para resolver o problema com o "this" usa-se o metodo "bind"
// Usando "bind" o "this" é passado para o contexto desejado
/* Foi criada um nova variável/função "falarDePessoa", que recebe
 a função "falar()" do objeto pessoa, feito um "bind(pessoa)" para 
 alterar o contexto do "this" para a nova função "falarDePessoa".
 Dessa maneira é possivel acessar o atributo saudacao de Pessoa. */
const falarDePessoa = Pessoa.falar.bind(pessoa)
falarDePessoa()