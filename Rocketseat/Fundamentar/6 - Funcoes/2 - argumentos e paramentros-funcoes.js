// podemos declarar funções dentro de variáveis

// function expression
// function anonymous

//parâmetros (parameters)
const sum = function(number1, number2) {
  console.log(number1 + number2);
  let total = number1 + number2
  return total // se não colocar o return e a variável total, não vai aparecer a soma lá em cima.
} // declarando a função

sum(2, 3) // argumentos
sum(4, 5)

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);