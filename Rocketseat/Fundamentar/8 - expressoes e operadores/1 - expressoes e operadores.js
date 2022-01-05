/*Expressões e Operadores

  - expressions: qualquer linha de código que resolva algo no JS
  - operators
      binary
      unary
      ternary
      
*/
// EXPRESSÂO
// let number; // isso é uma expressão

// onde o ponto e vírgula faz falta?
// nas funções auto-executáveis

/*let number = 1; // se não colocar um ; nessa variável que recebe atributos dá erro

(function () {
  console.log('alo');
})()
*/

// Operadores

// binários: 2 operadores
let number = 1
console.log(number + 1)

// operador de incremento: ++
console.log(++number) // pega o valor colocado e soma mais 1
// console.log(--number); // versão negativa: pega o número e subtrai 1 dele

// unário: um só operador
console.log(typeof number)

// ternário: 3 operadores

console.log(true ? 'alo' : 'nada')  // se for verdade escreve alo se não for escreve nada 
// console.log(false ? 'alo' : 'nada') // aqui mostra nada