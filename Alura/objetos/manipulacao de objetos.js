const cliente = {
	// nome é a chave / andré é o valor
	nome: "André",
	idade: 26,
	cpf: "123456789",
	email: "andre@email.com",
	fones: ["55912345498", "558299554466"],
};

// pegar um array dentro da chave do objeto

cliente.fones.forEach(fone => console.log(fone));

// objeto dentro de objetos

// cirando outra chave que será um objeto

cliente.dependentes = [{
		nome: "Sara",
		parentesco: "filha",
		dataNasc: "20/03/2011",
	}]

/*	{
		nome: "Pedro",
		parentesco: "primo",
		dataNasc: "10/04/2011",
	},

	{
		nome: "João",
		parentesco: "conjugue",
		dataNasc: "10/06/2070",
	},
; */

console.log(cliente);

// alterando uma informação dentro de um objeto que está dentro de outro objeto

//cliente.dependentes.nome = "Sara Silva";

console.log(cliente);

console.log(`o dependente é ${cliente["dependentes"]}`);



// adicionando mais um dependente - mais um objeto ao objeto que está dentro do objeto cliente

cliente.dependentes.push({
  nome: "Pedro",
  parentesco: "primo",
  dataNasc: "10/04/2011",

});

cliente.dependentes.push({
		nome: "João",
		parentesco: "conjugue",
		dataNasc: "10/06/2070",
})

console.log(cliente);

//pegando apenas um dependente, nesse caso o conjugue. é necessário guardar esse valor em uma variável

const conjugue = cliente.dependentes.filter(dependente => dependente.parentesco === "conjugue")

// como o filter retorna um array, é necessário colocar o index do array que eu quero que o resultado do console mostre. nesse caso, como o filter sempre retornar um array vazio, o valor que eu vou guardar lá dentro começa no index 0. então o nome João vai ficar no índice zero..

console.log(conjugue[0].nome);


// FUNÇÕES - métodos do objeto

  // adicionando a propriedade saldo

cliente.saldo = 100
  // criando a função depositar
cliente.depositar = function (valor) {
  this.saldo += valor //  this referencia o próprio objeto
}


console.log(cliente.saldo);
// fazendo a função depositar adicionar 30 reais 
cliente.depositar(30);

// exibindo o novo saldo
console.log(cliente.saldo);


// exercício

const colecionador = {
	nome: "joão",
	idade: 41,
	tipocolecao: ["quadrinhos"],
	contato: "joao@email....",
	adicionarTipo(propriedade, tipo) {
		this[propriedade].push(tipo)
	}
}

for (i = 0; i < 4; i++){
	colecionador.adicionarTipo("tipocolecao", "HQ"+i)
}
//console.log(colecionador.nome);
//console.log(colecionador["nome"]);
console.log(colecionador);


/* 

Nessa aula, você aprendeu:
Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.


*/