// função autoinvocável IIFE

// quando é declarada precisa estar entre parênteses
(function() {
  let name = "digital"
  return name
}
)();

// callbacks
//é uma função passada como argumento pra outra função:
/*const calc = functiion(operacao, num1, num2) {
  return operacao(num1, num2);
}

const soma = function (num1, num2) {
  return num1 + num2;
}

const sub = function (num1, num2) {
  return num1 - num2;
}

const resultSoma = calc(soma, 1, 2)
const resultSub = calc(soma, 1, 2)

console.log(resultSoma);
console.log(resultSub);*/

// parâmetros:
// arguments: é um array com todos os parâmetros passados quando a função foi invocada

function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
    max = arguments[i];
    }

  }

}

return max;

// arrays e objetos:

//array: 
// spread lida separadamente com elementos de um array

function sum(x, y, z) { return x + y + 2;

}

const numbers = [1, 2, 3];
console.log (sum(...numbers));

// rest: combina os elementos em um array 
function confereTamanho(...args) { console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

// objects destructuriing: filtra dentro do objeto apenas os dados que nos interessa

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: "John",
    lastName: 'Doe'
  }

};

function userId({ id }) {
  return id;
}

function getFullName({fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`;
}

userId(user) // 42


getFullName(user)
// John Boe


// LOOPS

// if / else 
//exemplo 1:
function numeroPositivo(num) {
  let resultado;

  if (num < 0) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;

}

numeroPositivo(2)
// true

numeroPositivo(-9)
// false


//exemplo 2: 
function numeroPositivo(num) {
  let resultado;

  const ehNegativo = num < 0;
  if (ehNegativo) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}

// exemplo 3: 
function numeroPositivo(num) {
  const ehNegativo = num < 0;

  if (ehNegativo) {
    return false;
  }

  return true;

}

// aninhando ifs

function numeroPositivo(num) {

  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if(ehNegativo) {
  return "Esse número é negativo!";
  } else if (!ehNegativo && maiorQueDez) {
    return "Esse número é positivo e maior que 10!"
  }

  return "Esse número é positivo!";

}


// switch-case: serve pra muitas verificações, equivale a uma comparação de tipo e valor (===)



  function getAnimal(id) {
    switch (id) {
      case 1:
        return "cão"; 
      case 2:
        return "gato";  
      case 3:  
        return "pássaro";
      default:
        return "peixe";
    }
}

getAnimal (1) // cão
getAnimal(4) // peixe 
getAnimal("1") // peixe

// for (loop dentro de elementos iteráveis(arrays, strings))

function multiplicaPorDois(arr) {
  let multiplicados = [];

  for (let i = 0; i < arr.length; i++) {
    multiplicados.push(arr[i] * 2);
  }

  return multiplicados;

}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois (meusNumeros); // [4, 66, 912, 712, 80]


//for...in

function forInExemplo(obj) {
  for (prop in obj) {
    console.log(prop);
  }

}

const meuobjeto = {
  nome: "João",
  idade: "20",
  cidade: "Salvador"
}

forInExemplo(meuObjeto);

// nome

// idade

// cidade

// usando variável se

function forInExemplo(obj) {
  for (prop in obj) {
    console.log(obj[prop]);
  }
}

const meuObjeto = {
  nome: "João",
  idade: "20",
  cidade: "Salvador"
}

forInExemplo(meuObjeto);

// João
// 20
// Salvador


// for...of: loop entre estruturas iteráveis (arrays, strings)

function logLetras(palavra) {
  for (letra of palavra) {
    console.log(letra);
  }

}

const palavra = "abacaxi";

LogLetras(palavra)
// a
// b
// a
// c
// a
// x
// i

function logNumeros(nums) {
  for (num of nums) {
    console.log(num);
  }

}

const nums = [30, 20, 233, 21;

logLetras (nums)
// 30
// 20
// 233
// 2


// while - executa até que a condição se torne falsa

function exemploWhile() {
  let num = 0

  while(num <= 5) {

  console.log(num);

  num++;

  }

}

exemploWhile()

// 0
// 1
// 2
// 3
// 4
// 5


// do while: executa até que a condição se torne falsa. mas sempre executa, pelo menos uma vez. 

function exemploDoWhile() {
  let num 0;
  do {
    console.log(num);
    num++;
  } while (num <= 5)

}

exemploDoWhile()
// 0
// 1
// 2
// 3
// 4
// 5


function exemploDoWhile() {
  let num = 6;
  do {
    console.log(num);
    num++;
  } while (num <= 5)
}

exemploDoWhile();


// this: é uma referência pro contexto que você está.
// this refere-se a objeto Pessoa

const pessoa = {

  firstName: "André",
  lastName: "Soares",
  id: 1,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getId: function () {
    return this.id;
  }

};

pessoa.fullName(); // "André Soares"
pessoa.getId(); // 1

// Tabela:
/*
Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

      Contexto        |     Referência
----------------------|---------------------------------------
Em um objeto(método)  | Próprio objeto dono do método
Sozinha               |  Objeto global (em navegadores, window)
Função                |  Objeto global
Evento                |  Elemento que recebeu o evento
*/










