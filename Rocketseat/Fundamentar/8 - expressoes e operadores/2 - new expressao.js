const { objectOf } = require("prop-types")

/*
new (expressão)

  * left - hand - side expression
  * criar um novo objeto 
*/

let name = new String('charlie')
name.serName = "bellow"
let age = new Number(23)
console.log(name.serName, age);

let date = new Date('2020-12-01')
console.log(date.__proto__);