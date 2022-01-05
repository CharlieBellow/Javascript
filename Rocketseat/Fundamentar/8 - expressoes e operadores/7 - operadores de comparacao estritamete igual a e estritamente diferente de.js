
let one = 1
let two = 2

// ===    estritamente igual a 
console.log(one === "1"); // aqui dá falso pq um é string e o outro é número

//ex: 
// 1 + 1 = 2 (aqui o + é de soma)
// "1" + 1 = "11" (aqui o + é de concatenação)
// é por isso que a variável one que recebe o valor 1 não é exatamente igual à string "1"

console.log(one === 1);


// !==    estritamente diferente de
console.log(two !== '2'); 
console.log(two !== 2);