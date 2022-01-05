// function hoisting

/*sayMyName() // chamando a função

function sayMyName(params) {
  console.log('charlie');
} //declarando a função*/

sayMyName()

var sayMyName = function sayMyName() {
  console.log('charlie');
}

// quando faz uma função a partir de uma expressão, ela não sofre elevação do hoisting