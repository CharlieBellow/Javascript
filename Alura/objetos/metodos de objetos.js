const cliente = {
	nome: "Andre",
	idade: 26,
	cpf: "45551354215",
	email: "andre@email.com",
	telefones: ["5651651656165", "2564511452155"],
	dependentes: [
		{
			nome: "sara",
			parentesco: "filha",
			dataNasc: "20/01/2015",
		},

		{
			nome: "Pedro",
			parentesco: "primo",
			dataNasc: "10/04/2011",
		},

		{
			nome: "João",
			parentesco: "conjugue",
			dataNasc: "10/06/2070",
		},
	],
	saldo: 100,
	depositar: function (valor) {
		this.saldo += valor;
  },
  
};

// pegando só os nomes das chaves e exibindo em um array
//const propsClientes = Object.keys(cliente);
// SAÍDA:
/* 
[
  'nome',
  'idade',
  'cpf',
  'email',
  'telefones',
  'dependentes',
  'saldo',
  'depositar'
]
*/

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  // verificando se no array tem a palavra dependentes
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  } 
}

oferecerSeguro(cliente);

// pegando só os valores das chaves e exibindo em um array
console.log(Object.values(cliente));

//Saída:

/* 
[
  'Andre',
  26,
  '45551354215',
  'andre@email.com',
  [ '5651651656165', '2564511452155' ],
  [
    { nome: 'sara', parentesco: 'filha', dataNasc: '20/01/2015' },
    { nome: 'Pedro', parentesco: 'primo', dataNasc: '10/04/2011' },
    { nome: 'João', parentesco: 'conjugue', dataNasc: '10/06/2070' }
  ],
  100,
  [Function: depositar]
]
*/

// colocando chave e valor dentro de um array e exibindo todas as chaves e valor dentro de um array (entries)
console.log(Object.entries(cliente));

// SAÌDA:
// o índice 0 é a chave, o índice 1 é o valor
/* 
[
  [ 'nome', 'Andre' ],
  [ 'idade', 26 ],
  [ 'cpf', '45551354215' ],
  [ 'email', 'andre@email.com' ],
  [ 'telefones', [ '5651651656165', '2564511452155' ] ],
  [ 'dependentes', [ [Object], [Object], [Object] ] ],
  [ 'saldo', 100 ],
  [ 'depositar', [Function: depositar] ]
]

*/

