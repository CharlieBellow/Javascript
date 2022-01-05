// operador condicional (Ternário)

// dependendo da condição, nós receberemos valores diferentes

// condição então valor 1 se não valor 2

// condition ? value1 : value2

// exemplos 

// Café da manhã top
let pao = true
let queijo = false

//const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'  // como se lê -- se tenho pão e queijo, então 'café top',  se não 'café ruim'

const niceBreakfast = pao || queijo ? 'café top' : 'café ruim' // se pão ou queijo, então café top, se não café ruim
console.log(niceBreakfast);

// maior de 18 anos

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
// sea idade é maior ou igual a 18 anos então escreva 'can drive' se não escreve "can't drive"
console.log(canDrive);

// obs qualquer coisa pode ser colocada nesses operadores: array, funções, números...