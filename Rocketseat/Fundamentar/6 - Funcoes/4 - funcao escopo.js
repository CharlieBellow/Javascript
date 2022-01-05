// Escopo de função

// exemp.: 1
let subject = 'create video'

function createThink(subject) {
  return subject
}

console.log(subject)
createThink(createThink(subject))

// exemp.: 2

let subject

function createThink() {  // aqui não tem parêmetro, então ele pega da variável de fora, mas se tivesse, iria retornar study
  subject = 'study'
}

console.log(subject)
createThink() //retorno da função
console.log(subject); // variavel subject atulizada

// obs: toda função que não tem retorno ela é undefined