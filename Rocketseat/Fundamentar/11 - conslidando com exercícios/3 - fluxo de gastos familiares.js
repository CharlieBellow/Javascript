/*Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

* receitas: []
* despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

/*

function calcSaldo (saldo = {
  receitas: [],
  despesas: []
  }) {
  let total = receitas[10 + 20] - despesas[20]  

  // mensagem
  if (total > 0) {
    console.log('o saldo é positivo');
  } else if (total < 0) {
    console.log('o saldo é negativo');
  } else {
    console.log('entrada inválida');
  }
  return total
}

console.log(calcSaldo(total));

*/


/*
function calcSaldo(receitas, despesas) {
  let total = receitas - despesas

  if (total > 0) {
    console.log('o saldo é positivo');
  } else if (total < 0) {
    console.log('o saldo é negativo');
  } else {
    console.log('entrada inválida');
  }
  return total

  return 'seu saldo é:' + total
}

let saldo = calcSaldo({
  receitas: [30],
  despesas: [20]
})

console.log(saldo);*/


// fiz com o Gustavo
let orcamento1 = {
  receita: [300, 500, 56.15, 85.96],
  despesas: [20, 100, 45.76, 45.86,],
}

let orcamento2 = {
  receita: [300, 500, 56.15, 85.96, 80.89, 45, 87],
  despesas: [300, 500, 56.15, 85.96, 80.89, 1000, 5000, 3000, 5000, 5000, ]
}

let orcamento3 = {
  receita: [300],
  despesas: [300],
}
let orcamento4 = {
  receita: [],
  despesas: [],
}

function calcSaldo(o) {
  let somaReceita = 0
  for (let index1 in o.receita) {
    somaReceita += o.receita[index1]
    //console.log(`o valor é ${somaReceita}`);
  }

  let somaDespesa = 0
  for (let index1 in o.despesas) {
    somaDespesa += o.despesas[index1]
    //console.log(`o valor é ${somaDespesa}`);
  }
  
  let saldo = somaReceita - somaDespesa
  
  if (saldo >= 0) {
    console.log(`saldo positivo: ${saldo}`);
  } else {
    console.log(`saldo negativo: ${saldo}`);
  }
  
  //return saldo
}
calcSaldo(orcamento1);
calcSaldo(orcamento2);
calcSaldo(orcamento3);
calcSaldo(orcamento4);


/* // minha versão final
const calcSaldo = function (receita, despesa) {
  console.log(receita - despesa);
  let total = receita - despesa

  {
    receita: ['300'];
    despesa: ['20'];
  }

   if (total > 0) {
    console.log('o saldo é positivo');
  } else if (total < 0) {
    console.log('o saldo é negativo');
  } else {
    console.log('entrada inválida');
  }
  return total
 } 


calcSaldo(300, 20)*/

/*let receita = 30
let despesa = 200*/


//console.log(calcSaldo(`O saldo é  por que o total da subtração é ${total}`))



// como ele ensinou:

/*let orcamento = {
  receitas: [4955,66],
  despesas: [350, 80, 150, 100, 45, 300, 495,56]
}


function soma(array) {
  let total = 0;
  
  for (let somaReceitas of array) {
    total += somaReceitas
  }
  return total
}

function calcBalanco() {
  const calcularReceitas = soma(orcamento.receitas)
  const calcularDespesas = soma(orcamento.despesas)

  const total = calcularReceitas - calcularDespesas

  const casoSaldoPositivo = total >= 0

  let balanceText = "negativo"  // se for abaixo de zero já é negativo

  if (casoSaldoPositivo) {
    balanceText = "positivo" // se for acima de zero ele atualiza para negativo
  }

  console.log(`Seu saldo foi ${balanceText}: R$ ${total.toFixed(2)}`);
}

calcBalanco()*/