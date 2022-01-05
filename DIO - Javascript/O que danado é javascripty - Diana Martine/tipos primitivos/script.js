// tipos primitivos

//boleanos
/*
var vOuf = false;
console.log(vOuf);
console.log(typeof (vOuf));

//number
var numero = 1
console.log(typeof (numero));

//string
var nome = "charlie";
console.log(typeof (nome))

//como declarar variáveis
var variavel = 'charlie'
variavel = 'bellow' // aspas simples para strings
console.log(variavel)


//let
let variavel2 = 'charlie'
variavel2 = 'tatu'
console.log(variavel2)

//const (constante - não pde ser alterada e tem que ter um valor declarado)
const constante = 'charliebellow'
console.log(constante) */

/*
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}
escopoLocal();
*/
//Regras de Uso
/*  inicie nome de variaveis sempre com letras, _ ou $ e nunca com números ex: var_nome

    não use espaços, use _ ou escreva segunda palavra com letra maiúscula ex: meuNome ou meu_nome

    não use palavras reservadas(palavras que fazem parte da sintaxe) ex: var function

    sempre declare as variáveis no topo do código
*/
// Atribuição
/*
O sinal de = significa atribuição (recebe o valor de)
ex: var nome = 'meu nome'
*/

// Comparação
/*
usa-se dois sinais de == 
ex: 0==0
como ler : zero é igual a zero?
obs: sempre vai retornar um valor boleano (verdadeiro ou falso)
ex:
var compara = '0' == 0;
console.log(compara)
*/

// Comparação Idêntica (faz comparação de valor e tipo)
/*
usa-se três sinais de ===
ex de com delclarar: 0===0
como ler : "0" tem valor e típo idêntico a 0?
obs: sempre vai retornar um valor boleano (verdadeiro ou falso)
ex:
var compara = '0' === 0; // nesse caso uma é string e a outra é numero, por isso retorna falso
console.log(compara)
*/

/* operadores aritimético
são oeradores matemáticos com valor numérico
+ adição
- subtração
* multiplicação
/ divisão real
% divisão inteira
** potenciação

exemplos: 

var adicao = 1+1
console.log(adicao)

var subtracao = 2 - 1
console.log(subtracao)

var multiplicacao = 2 * 3
console.log(multiplicacao)

var divisaoReal = 3.3 / 3
console.log(divisaoReal)

var divisaoInteira = 5 % 4 //o resto da divisão é 
console.log(divisaoInteira)

var potenciacao = 2 ** 10; //2 elevado a 10
console.log(potenciacao)
*/

/* Operadores relacionais
> maior que
< menor que
>= maior ou igual a;
<= menor ou igual a;
exemplos;

var maiorque = 5 > 2
console.log(maiorque)

var menorQue = 5 < 2;
console.log(menorQue)

var maiorIgual = 5 >= 2;
console.log(maiorIgual)

var menorIgual = 5 <= 2;
console.log(menorIgual)
*/

/*operadores lógicos

&& seria o "e" - considera que todos os valores sejam true;
|| - "ou" - considera que qualquer valor seja true;
! - "não/negação" - inverte o valor de true para false;


var e = true && true;
console.log(e)

var ou = true || false;
console.log(ou)

var negacao = !true;
console.log(negacao)
*/

/*Array
é declarado entre colchetes[] e podem guardar qualquer valor dentro deles.
    ex: */

//let array = ['string', 1, true, false, ['array1'], ['array2']];
//console.log(array[0]) // pegando só o valor do primeiro array, sempre começa a contar do 0
 
    //OBS: o iíndice só é acessado por um número inteiro, onde 0 é o primeiro índice.Cada índice é separado por vírgula.

/* Manipulando Arrays

Ao ser declarado, o Array traz consigo uma série de métodos para
manipulá-lo.

• forEach() – itera um array; - executa umafunção pra cada item do array
• push() – add item no final do array;
• pop() – remove item no final do array;
• shift() – remove item no início do array;
• unshift() – add item no início do array;
• indexOf() – retorna o índice de um valor;
• splice() – remove ou substitui um item pelo índice;
• slice() – retorna uma parte de um array existente;

ex:*/
//let array = ['string', 1, true, false, ['array1'], ['array2']]; //os exemplos estarão se referindo a esse conjunto de arrays

//forEach
//array.forEach(function(item, index){console.log(item, index)}) //mostra o item e o seu numero da string (indice)

//Push
//array.push('novo item'); //no meu conjunto de array tem 6 itens, e agora ele retornou 7
//console.log(array)

//pop
//array.pop(); //no meu conjunto de array tem 6 itens, e agora ele retornou 5, apagando o último ítem
//console.log(array)

//shift()
// array.shift(); // no meu conjunto de array tem 6 itens, e agora ele retornou 5, apagando o primeiro ítem
// console.log(array)

//unshift
// array.unshift('novo item no início'); //adiciona um ítem no início do array
// console.log(array)

//indexOf
// console.log(array.indexOf(true)) //serve pra quando eu quiser saber o número do índice de uma array

//splice
// array.splice(0, 3) // exclui os itens que eu selecionei, nesse caso, do 0 ao 3
// console.log(array)

//slice
// let novoarray = array.slice(0, 3); // mostrou os itens que eu selecionei, nesse caso, do 0 ao 3
// console.log(novoarray)

// OBJETOS
// 
// São Dados que possuem propriedades e valores que definem suas características.Deve ser declarado entre chaves “{ }”. Objetos podem guardar outros objetos, assim como array podem guardar arrays
// 
// Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
// tamanhos e funções(quero cafééé). Pode ser declarada assim:

// var xicara = {
// cor: ‘azul’,
// tamanho: ‘p’,
// funcao: tomarCafe()
// }

 //let object = {string: 'string', number:1, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'} };
// console.log(object.Boolean)
// console.log(object.objectInterno)

// let object = {string: 'string', number:1, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'} };
// var string = object.string
// //console.log(string)
// 
// var arrayinterno = object.array; //pegou o array dentro do conjunto (object) e colocou dentro dessa variável
// console.log(arrayinterno)

// var { string, Boolean, objectInterno } = object; //pegou esses objetos dentro do conjunto e fez a desestruturação, ou seja, trouxe pra dentro da variável e executu só eles..
// console.log(string, Boolean, objectInterno)