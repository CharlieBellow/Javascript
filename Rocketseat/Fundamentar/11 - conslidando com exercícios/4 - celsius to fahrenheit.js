/*  ## Celsius em Fahrenheit
  crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
*/

const { string } = require("prop-types");



// o que consegui fazer

/*function conversor(transformaC, transformaF) {
  let celsius = "45º c"
  let fahrenheit = "50º F"

  let tansforma = {
    transformaC: [(fahrenheit - 23) * 5 / 9],
    transformaF: [celsius * 9 / 5 + 32]
  }
  
  if (celsius) {
    transformaC
  } else if (fahrenheit){
    transformaF
  } else {
    console.log('inválido');
  }
}
conversor()*/

// como ele ensinou:

function transformeDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheit = degree.toUpperCase().includes('F')

  // fluxo de erro
  if (!celsiusExists && !fahrenheit) {  // se nao existir celcius e nem fahrenheit execute o que tá dentro do objeto
    throw new Error('grau não identificado')
  }
  // fluxo ideal: F --> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  // fluxo alternativo: C --> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => celsius * 9 / 5 + 32
    degreeSign = 'F'
  }

  return formula(updateDegree) + degreeSign
}

try {
  console.log(transformeDegree('50F'))
  console.log(transformeDegree('10C'));
  transformeDegree('50Z')

} catch (error) {
  console.log(error.message) // se colocar .message, ele dá só a mensagem de erro sem exibir muita coisa
}

//obs.: pode usar a expressão regular para extrair somente números de dentro de uma string... isso pode servir também pra o fluxo de gastos, para que seja possível colocar no array a descrição de cada gasto também..