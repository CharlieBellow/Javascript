// manipulando arrays

// contar elementos de um array

console.log(["a", "b", "c"].length); 

// os elementos do array odem ser qualquer tipo de dados, inclusive uma função

console.log([
  "a",
  { type: "array" },
  function() { return "alô" },
][2]()); // nessa linha tô usando os parênteses para acessar a posição 2 do meu array e com os parênteses estou chamando essa função e por isso ela retorna alo que é o que essa função faz
// se eu quiser posso fazer [1].type pra perguntar qual é o tipo de dado da posição 1 desse array