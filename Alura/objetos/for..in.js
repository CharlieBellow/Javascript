// FOR IN -- percorrre os elementos do objeto sem precisar colocar o .nome-da-propriedade

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
    this.saldo += valor
  }
};

let relatorio = "";

for (let info in cliente) {
	// pegando o nome da chave.
	relatorio += `${info}`
	// a info se refere ao nome da chave


	// pegando o valor da chave (separando chave e valor por : e cada informação por , )
	relatorio += `: ${cliente[info]}, `

	// SAÍDA:
	/* nome: Andre, idade: 26, cpf: 45551354215, email: andre@email.com, telefones: 5651651656165,2564511452155, dependentes: [object Object],[object Object],[object Object], saldo: 100, depositar: function (valor) {
    this.saldo += valor
  }, */
}

//console.log(relatorio);


// como pegar as chaves sem mostrar esses [object]  e function? (arrays e objetos)

//nesse caso, devemos dizer que se for do tipo (typeof) função ou objeto, ele tem que continuar (continue) em fazer nada

for (let info in cliente) {
	if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
		continue
	} else {
		relatorio += ` 
		${info}: ${cliente[info]} 
		`
		// melhorando a informação, mostrando a chave info e o valor cliente[info]
	}
}

console.log(relatorio);
