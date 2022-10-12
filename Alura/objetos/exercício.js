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
				nome: "Paulo",
				parentesco: "primo",
				dataNasc: "10/04/2011",
			},
		],
	},
];


// listar o loop no array clientes e puxar o espalhamento

for (let i in cliente) {
  let listaDependentes = [];
  let nomeCliente = [];

  //let i = 0
//console.log(listaDependentes);

  if (i < cliente.length) {
    nomeCliente = cliente[i].nome;
    listaDependentes = [...cliente[i].dependentes];
    i++;
  }
  //let clienteDependente = `${nomeCliente} ${listaDependentes}`;
  console.log(nomeCliente);
  console.table(listaDependentes);
  //console.table(listaDependentes)

  //console.log(nomeCliente + listaDependentes);

}

// tentativas: 
//function espalhamento(cliente) {
//const propsClientes = Object.keys(cliente);
// verificando se no array tem a palavra dependentes

//if (propsClientes.includes("dependentes")) {
/*  cliente.forEach(function espalhamento(cliente) {
    let listaDependentes = [];
    
    for (let i = 0; i < cliente.length; i++) {
    listaDependentes = [...cliente[i].dependentes];
    i++;
    }
    return listaDependentes;
})*/
//return listaDependentes;
//}
//}

/*let listaDependentes = [];

cliente.forEach(function (listaDependentes) {
for (let i = 0; i < cliente.length; i++) {
  listaDependentes = [...cliente[i].dependentes];
  i++;
}
});*/

//console.log(listaDependentes);
//espalhamento(listaDependentes);

// exemplo



//console.log(listaDependentes);



  /*//  minha saída é essa:
  // [ { nome: 'sara', parentesco: 'filha', dataNasc: '20/01/2015' } ]
  
  // eu quero que saia os dependentes dos dois objetos*/
