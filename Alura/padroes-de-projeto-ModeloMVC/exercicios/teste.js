/*class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  obtemNomeCompleto() {
    let nomeCompleto = this.nome + " " + this.sobrenome
    return nomeCompleto;
  }
}


function data(string) {
  var string = "2016-11-12";
  var newString = string.split("-");
   parseInt(newString);
  return console.log(`${newString[0]}, ${newString[1]}, ${newString[2]}`);
}
// 2016, 11, 12


 
data("2016-11-12");*/

numeros.reduce((total, num) => total * num, 1);




let dobro = numeros.map(num => num * 2);
let metade = numeros.map(num => num / 2);
let raiz = numeros.map(num => Math.sqrt(num));