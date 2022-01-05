// Manipulando strings e números

// contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"

console.log(word.length);

let number = 1234
// console.log(number.length); //jeito errado pq number n]ao recebe length. aí precisa transformar o número em string pra poder saber quantos caracteres tem..

console.log(String(number).length);