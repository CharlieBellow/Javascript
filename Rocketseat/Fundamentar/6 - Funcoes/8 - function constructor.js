/*
function () constructor

  * expressão new
  * criar um novo objecto
  * this keyword
*/

function Person(name) { 
  this.name = name //propriedade name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const charlie = new Person("charlie")
const joao = new Person("joão")
console.log(charlie);
console.log(charlie.walk());
console.log(joao.walk());
