/*Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".*/

// como eu fiz:
function comparaNumber(a, b) {
  
  //if (!a || !b) return "Defina dois números";

  const igual = a === b
  const verificaIgual = igual ? `os números ${a} e ${b} são iguais` : `os números ${a} e ${b} não são iguais`
  const soma = a + b
  const menorQueDez = soma < 10 ? `menor que 10` : `maior que 10`
  const maiorQueVinte = soma < 20 ? `menor que 20` : `maior que 20`
  //const verifica = a === Number && b === Number ? comparaNumber() : console.log("digite apenas números inteiros");
  /*if (a !== Number && b !== Number) {
    console.log("digite apenas números inteiros")
  } else {
    comparaNumber()
  }*/
  return console.log(`${verificaIgual}. Sua soma é ${soma}, que é ${menorQueDez} e ${maiorQueVinte}.`)
  
}
comparaNumber(0, 0)


// como ela fez:
/*function comparaNumerso(num1, num2) {
  if (!num1 || !num2) return "Defina dois números";
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = '';

  if (num1 === num2) {
    saoIguais = 'não';
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = 'menor';
  let resultado20 = 'menor';

  const campara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = 'maior';
  }

  if (compara20) {
    resultado20 = 'maior';
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(20, 20));*/