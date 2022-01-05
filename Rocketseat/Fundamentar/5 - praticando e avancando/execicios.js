// 1. Declare uma variável de nome weight

// 2. Que tipo de dado é a variável acima?
/*let weight

console.log(typeof weight);*/
/*
3. Declare uma variável e atribua valores para cada um dos dados:

* name: String
* age: Number (integer)
* stars: Number (float) (numero quebrado)
* isSubscribed: Boolean

*/
/*let name = "paulo"
let age = 22
let stars = 5.5
let isSubscribed = true*/

/*

4. A variável student abaixo é de que tipo de dados?



4.1 Atribua a ela as mesmas propriedades e valores d exercício 3.

4.2 Mostre no console a seguinte mensagem:


<name> de idade <age> pesa <weight> kg.


Atenção, substiua <name> <age> weight> pelos valores de cada propriedade do objeto
*/
let student = {
  name: "paulo",
  age: 22,
  weight: 75.5,
  isSubscribed: true,
};

//console.log(student)
//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} KG`);

/*
5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,

somente o Array vazio

*/

let students = [];

/*
6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/

students = [
  student
]

console.log(students);

/*
7. Coloque no console o valor da (posção zero do Array acima
*/
//console.log(students[0]);


/*
8. Crie um novo student e coloque na posição 1 do Array students8
*/

const john = {
  name: "john",
  age: 23,
  weight: 74.8,
  isSubscribed: true,
}

students[1] = john 
/*esse código acima é o mesmo que escrever novamente o array e acrescestar o john.ex:
studants: [
  student
  john
]*/
console.log(students);
/*
9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

a resposta vai ser 1 pq a variavel var é global e pega a declaração dela e coloca acima

a resposta é undefined. pq a variável a não está criada e mesmo que tenha o efeito hoisting, a variável vai ser declarada acima mas não vai ter nenhum valor no momento em que o console.log foi executado. só depois ela recebe o valar de 1. por isso a resposta é undefined

seria isso que o hoisting faz:

var a
console.log(a)
a = 1

*/
console.log(a)
var a = 1



