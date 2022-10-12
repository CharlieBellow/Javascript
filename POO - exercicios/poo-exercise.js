/* 
Exercise

Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".


*/


class Person {
  constructor(nome, idade, mae) {
    this.nome = nome;
    this.idade = idade;
    this.mae = mae;
  }

  describe() {
      return `o nome é ${this.nome}, ele tem ${this.idade} anos.`;
  }

  birthYear() {
    const anoAtual = 2022;
    const year = anoAtual - this.idade
    return year;
  }
}


const pessoa = new Person("John", 19);
const carla = new Person("Carla", 40)

pessoa.mae = carla

console.log(carla.birthYear());


// exercício de programação com javascript e orientado à objetos com JS.
// estrutura de dados


/* 

Crie um array "textDatabase" com 10 Textos com diferentes títulos. Depois crie uma função "searchByTitle" que recebe como argumentos um array "a", e uma string "searchTerm", e retorna um novo array, contendo somente os Textos cujo título COMEÇA COM o "searchTerm"


*/