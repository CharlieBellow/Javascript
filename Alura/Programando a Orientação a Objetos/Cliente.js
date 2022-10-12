export class Cliente {
	// a classe tem esses atributos que eu tô dizendo

	get cpf() { 
		return this._cpf;
	}

	constructor(nome, cpf, senha) {
		this.nome = nome;
		this._cpf = cpf;
		this._senha = senha;
	}

	autenticar() {
		return true;
	}

}
