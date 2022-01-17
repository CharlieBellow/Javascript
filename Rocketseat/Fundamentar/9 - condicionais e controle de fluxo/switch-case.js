// switch


// como se escreve: 

/* switch () {
  case x:
// faça isso
  break;
case y:
//faça aquilo
break;
default:
break;
}
*/

/*
let expression = 'a'

switch (expression) {
  case 'a':
    // código
    console.log('a');
    break
  case 'b':
    // código para expressão b
    console.log('b');
    break
  default:
    console.log('default');
    break
}*/

 // se não colocar o break, ele executa o código que tá sem o break e todas as outras que estiverem dentro da condição.. ou seja, é igual ao if else, mãs com a opção do break, dá pra escolher se as outras condições vão ser ignoradas ou nao..


// exemplo de uso

function calculate (number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
      break;
    case '-':
      result = number1 - number2
      break;
    case '*':
      result = number1 * number2
      break;
    case '/':
      result =  number1 / number2
      break;
    default:
      console.log('não implementado');
      break;
  }
 return result
}

console.log(calculate(4, '+', 8))