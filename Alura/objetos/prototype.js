// só da pra ver no console do navegador. lá ele mostra todos os métodos disponíveis par array, objeto, string, número, função...


// CLIENTE GENÉRICO

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  // método
  this.depositar = function (valor) {
    this.saldo += valor
  }
}

// o new ẃ ma palavra reservada
/* 
é usado pra dizer que estamos nos utilizando da função new pra criar um novo objeto a partir das características da classe (instância). então a const andre é uma nova instancia de Cliente. e dentro dos parentess de cliente está os valores dos parâmetros desse novo cliente andre que está sendo criado
*/

//const andre = new Cliente("André", "122545251", "andre@email.com", 100)
//
//console.log(andre);

// desafio: aproveitar o cliente e criar outro pra clientes de poupança

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  // chamando todas as propriedades do Cliente para esse novo cliente com o .call() 
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("ju", "551154111", "ju@email.com", 100, 200)

console.log(ju);

// definindo no prototipo um novo metodo para depositar na poupança
// obj.propriedade = "valor"
ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup);

/* 

Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

*/


function ClienteCorrente(nome, cpf, email, saldo, saldoCorrente) {
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoCorrente = saldoCorrente
  }


const paula = new ClienteCorrente("paula", "55522221522", "paula@email.com", 100, 200)

ClienteCorrente.prototype.depositarCorrente = function (valor) {
	this.saldoCorrente += valor;
};

console.log(paula);
paula.depositarCorrente(30);

console.log(paula.saldoCorrente);


console.log(paula.hasOwnProperty("saldoCorrente"));
console.log(ju.hasOwnProperty("saldoPoup"));
console.log(paula instanceof Cliente);
console.log(typeof paula);
console.log(typeof ju);
console.log(ju instanceof ClientePoupanca);
console.log(Function.prototype.isPrototypeOf(Cliente));
console.log(Cliente.constructor === Function);


/* 

Nessa aula, você aprendeu:
Que no Javascript o protótipo representa um objeto “modelo” com seus métodos, utilizado como base para a criação de outros objetos;
Como acessar propriedades de protótipo através de __proto__ e da propriedade prototype;
Como a herança de protótipo é utilizada para a criação de dados primitivos, arrays e objetos com JavaScript;
Como criar objetos utilizando funções construtoras;
Como utilizar a herança para criação de novos objetos com a propriedade prototype.


*/