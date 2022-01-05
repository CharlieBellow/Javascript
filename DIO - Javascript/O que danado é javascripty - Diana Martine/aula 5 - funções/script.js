/*# FUNÇÕES
SÃO BLOCOS DE COMANDOS E INSTRUÇÕES PARA A EXECUÇÃO DE DETERMINADAS TAREFAS:

EX.: FUNCTION NOMEDAFUNCAO() {
        ${INSTRUCAO};
        }
        NOMEDAFUNCAO();

##Como declarar?
Geralmente se utiliza a palavra reservada “function” seguida de parênteses “()” e chaves “{}”:

Ex.: function funcao() {
console.log(“mensagem”);
}
funcao();

() – indica que é um objeto do tipo function;
{} – indica que é um bloco de instrução;*/

/*function funcao() {
    console.log('esaa mensagem veio de uma função')
    
}
funcao();
*/
/*## Funções com parâmetros
As funções podem receber em sua declaração, parâmetros,que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex.: function nomeDaFuncao(parametro) {
    ${instrucao};
    }
nomeDaFuncao(valorDoParametro);
*/

/*function mensagem(primeiroParametro, segundoParametro) {
    console.log(primeiroParametro, segundoParametro);
        }
mensagem('tudo certo, jovem!');
*/

/*
##TIPOS DE FINÇÕES

# Funções declarativas
São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada “function” seguida do nome da função, parênteses “()” e chaves “{}”:

Ex.: function nomeDaFuncao() {
${instrucao};
}
// o nome da função declarativa é obrigatório;
*/

/*function funcao() {
    console.log('sou uma mensagem de uma função delcarativa!')
}

funcao();*/

/*
#Expressões de Funções
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

Ex. 1: var funcao = function nomeDaFuncao() {
${instrucao};
}

Ex. 2: var funcao = function () {
${instrucao};
};
*/
/*
//com nomeação

var funcao = function funcao() {
    console.log('sou uma mensagem de função de expressão com nomeação')
}
funcao()

//sem nomeação
var funcao = function () {
    console.log('sou uma mensagem de função de expressão sem nomeação')
}
funcao()*/
/*
# Arrow Function
São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

Ex. 1: var funcao = () => {
${instrucao};
}


var funcao = () => {
    console.log('sou uma mensagem de uma arrow function');
}
funcao();
*/