// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 345.54465465151
console.log(number.toFixed(2).replace(".", ","));

// colocar 2 casas decimais: .toFixed (nº de casas que quer)
// trocar ponto por vírgula: .replace("o que eu quero trocar", "pelo que quero trocar")