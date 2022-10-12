
//# Atividade prática



//verificar palíndromo
/*
Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

//como eu fiz
/*function veja() {
  let array = ['romametemamor'];
    let verifyArray = array === array.reverse() ? "é igual" : "é falso";
    console.log(`${verifyArray}`);
    return verifyArray
}
veja()

*/
// como ela fez:
// solução 1: 
/*function verificaPalindromo(string) {
  if (!string) return "string inexistente"; // fazendo assim ele verifica se o que tá sendo passado é uma string, e se não for ele vai retornar, ou seja, vai sair da função

  return string.split("").reverse().join("") === string;

}
console.log(verificaPalindromo(""));
*/

//solução 2:

/*function verificaPalindromo(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) { // aqui como a gente já ta comaparando o primeiro item com o último, já é a comparação de dois números, então a gente não precisa percorrer o array inteiro, só a metade dele. por isso divide por 2.
    if (string[i] !== string[string.length - 1 - i]) { // aqui tô comparando o tamanho da string com o índice dela. mas um começa no 0 e o outro no 1, por isso eu tenho que diminuir 1 pra que fiquem iguais e seja possível comparar
      return false;
    }
  }
  return true;
}
console.log(verificaPalindromo("abba"));
console.log(verificaPalindromo("gato"));*/


// substituir números pares

/*Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1*/

//como eu fiz: 
/*function trocaArray(array) {
  if (!array) return "array inválido"
  //let array = []
  for (let i = 0; i < array.length; i++) {
    if (array % 2 == 0) { 
      array.replace(array, "0")
    } else if (array.includes([])) {
      return "-1"
    }
  }

}
let array = [1, 3, 4, 6, 80, 33, 23, 90];
 console.log(trocaArray(array));
*/
/*
trocaArray([1, 3, 4, 6, 80, 33, 23, 90]);*/

function substituiPares(array) {
  if (!array.length) return -1;
  if (!array) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("você já é zero");
    } else if (array[i] % 2 === 0) {
      console.log(`substituindo ${array[i]} por 0`);
      array[i] = 0;
    } 
  }
  return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));