// Variáveis e tipos de dados
// declaração ou declaration

var name

// assignment or atribuição de valores
name = "charlie"

// que tipo de dado foi colocado na variável
//console.log(typeof name)

/*let age = 20
let isHuman = true*/


// agrupamento de declarações (atribuição conjunta)

let age, isHuman

age = 28
isHuman = true

// múltiplos argumentos na função
// para colocar todas na mesma linha tem que colocar a vírgula para concatenar 
// console.log(name, age, isHuman)

// escrita de texto + variáveis


// CONCATENAÇÂO
//console.log("o " + name + " tem " + age + " anos")

// interpolando valores com o template literals or template strings - ${} 
// para interpolar usa a crase
//console.log(`o ${name} tem ${age} anos.`);



// Object

const person = {
  name: 'Charlie',
  age: 28,
  weight: 75.5,
  isAdmin: true
}


console.log(person);

// para mostrar só um valor de um propriedade usa o ponto.

console.log(person.name);

//console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} KG`);


// Array

const animals = [
  'lion',
  'monkey',
  'cat',
  {
    name: 'duck',
    age: 3
  }
  //obs: pode colocar objeto dentro de array
]



// acessar valores dentro do Array (leva em conta a posição do array, aí coloca a posição dentro dos colchetes e o console vai mostrar só essa posição)
console.log(animals[0]);
console.log(animals.length); // para ver todas as propriedades do objeto, ou seja, ele conta quantos tem...

console.log(animals[3].name); // acessando só um valor do objeto dentro do array



//pq não funciona assim?
/*const pessoa = {
  {
    name: 'charlie',
    age: 27,
  }
  
  {
    name: 'Milena'
    age: 23
  }
}


console.log(pessoa)*/