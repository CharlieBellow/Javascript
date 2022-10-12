const cliente = [
  {
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
    ],
    saldo: 100,
    depositar: function (valor) {
      this.saldo += valor;
    }
  },

  {
    nome: "JUliana",
    idade: 26,
    cpf: "45551354215",
    email: "andre@email.com",
    telefones: ["5651651656165", "2564511452155"],
    dependentes: [
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
  }
  
];


// pegando só os objetos presentes na chave dependentes 
//const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

// SAÌDA:

/* 
[
  { nome: 'sara', parentesco: 'filha', dataNasc: '20/01/2015' },
  { nome: 'Pedro', parentesco: 'primo', dataNasc: '10/04/2011' },
  { nome: 'João', parentesco: 'conjugue', dataNasc: '10/06/2070' }
]

ou seja, pegou todos os dependentes (mesmo que sejam de objetos separados) e colocou em um único array. se eu quisesse pegar só do objeto andré, era só ter colocado ...cliente[0].dependentes
*/
//console.log(listaDependentes);

// exibindo esse array de dependetes em forma de tabela
//console.table(listaDependentes)
/* 
SAÍDA:
┌─────────┬─────────┬────────────┬──────────────┐
│ (index) │  nome   │ parentesco │   dataNasc   │
├─────────┼─────────┼────────────┼──────────────┤
│    0    │ 'sara'  │  'filha'   │ '20/01/2015' │
│    1    │ 'Pedro' │  'primo'   │ '10/04/2011' │
│    2    │ 'João'  │ 'conjugue' │ '10/06/2070' │
└─────────┴─────────┴────────────┴──────────────┘


*/


// listar o loop no array clientes e puxar o espalhamento

/*var listaDependentes = [];

//function espalhamento(cliente) {
  //const propsClientes = Object.keys(cliente);
	// verificando se no array tem a palavra dependentes
  
	//if (propsClientes.includes("dependentes")) {
    for (let i = 0; i < cliente.length; i++) {
      listaDependentes = [...cliente[i].dependentes];
      i++;
    
    }
  //return listaDependentes;
//}
//}
console.log(listaDependentes);
//espalhamento(listaDependentes);
*/

/* 

JSON.parse(): converte JSON para um objeto JavaScript;
JSON.stringify(): converte um objeto JavaScript para o formato JSON.


Nesta aula, você aprendeu:
Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.


*/