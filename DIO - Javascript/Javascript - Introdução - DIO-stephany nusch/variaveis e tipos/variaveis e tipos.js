// # Atribuição de valores
// variáveis
//let pode ser reatribuído mas não pode ser redeclarado

/*var firstName = 'João';
let lastName = 'Sousa';

if (firstName === 'João') {
  let lastName = 'Rodrigues';
  var firstName = 'Padro';
  lastName = 'Silva';
  
  console.log('lastName');
}

console.log(firstName, lastName);*/

// constantes 
// declare em SNAKE_UPPER_CASE
/* 
const FIRST_NAME = 'Stephany';

FIRST_NAME = 'Julia';  */

//let, var e const:



// # Tipos 

//estrutura de dados

// strings
let nome = "joão" //nome 'joão'
let sobrenome = "pedro"

nome.concat(sobrenome) //'joãopedro'
//corrigindo esse concatenação:
nome = nome + " " + sobrenome // 'joão pedro'

// colocando um nome em cada linha:
concatenado = nome + "\n" + sobrenome

// ou

concatenado = `${nome} 
${sobrenome}` /* se pular a linha assim ele também vai entender essa quebra de linha */
let concatenado = nome.concat(sobrenome)

concatenado.length // 9

let exemplo = new String('blablabla')
typeof exemplo // object

// para imprimir aspas na string:
concatenado = "\""
// ou
concatenado = `"`

// pegando as palavras das frases:
let frase = "olá mundo!"
frase = split("") /* sem espaços ele retorna cada letrinha */
// retorna em formato de lista: ["o","l","á","", "m","u","n","d","o", "!"]
frase = split(" ") /* com espaços ele retorna a cada espaço */
// retorna em formato de lista: ["olá", "mundo"]
//serve pra ver quantas palavras tem na frase (string)


// ver se na string tem essa palavra específica: 
frase.includes("mundo")
//retorna booleano: true

// ver se a palavra começa com alguma letra:
frase.startsWith("o")
// retorna: true

//ver se a frase termina com alguma letra:
frase.endsWith('!')
//retorna: true

// trocar um símbolo por outros
frase.replace("!", ".")
// retorna: "olá mundo."
// mas essa string é outra string e não a mesma substituída
// então precisa declarar uma nova variável pra pegar essa frase modificada: 
let fraseModificada = frase.replace("!", ".")


//  Numbers

let num = 100
let resultado = 0
resultado = 100 + 3
resultado = 100 / 2
resultado = num % 2
console.log(resultado);

// arredonda pra baixo
let fiveByTree = 5 / 3


Math.floor() /* arredonda pra baixo */

// arredonda pra cima:
Math.ceil() /* arredonda pra cima*/



// Booleans
// validar condicionais
let validation = 3 === 0 // false
validation = 3 === 3 // true

// retornando o contrário da minha variável (! negando)
!true // false

// arrays

let array = []
// adicionando itens no final do array 
array.push(3)
array.push(2)
array.push(5)


// tirando o último item do array
array.pop()

//tirando o primeiro item do array
array.shift()

// adicionando um item no inicio do arrays
array.unshift(1)

// vendo se no array tem 3
array.includes(3)

// vendo se todos são iguais a 5
array.every(item => item === 5)
//vendo se algum deles é 5
array.some(item => item === 5)

// inverter a ordem dos arrays
array.reverse()

// objeto
// name é a chave, joh é o valor
let person = {
  name: 'John',
  age: 28,
  address: "Rua 2"
}

let obj = {}
// criando elementos dentro do objeto
obj.name = 'Julia'
obj.age = 20
obj.["numberOfSiblings"] = 3

//vendo os valores
Object.values(obj) // julia, 20
// vendo as chaves
Object.values(obj) // name, age

// acessando o nome da pessoa no objeto
person.name
//ou 
person['name']



//empty, undefined e null (falsy values)
// empty: foi declarado mas tem valor zero 

// null: quando eu quero que o valor de propósito não seja nada

// undefined: valor indefinido, nem foi declarado


