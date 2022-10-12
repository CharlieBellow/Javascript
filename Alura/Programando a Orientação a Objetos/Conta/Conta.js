// Classe abstrata, só funciona pra ser herdada

export class Conta {
	constructor(saldoInicial, cliente, agencia) {
		// criando um erro para que a pessoa não utilize a conta para fazer operaçẽos
		if (this.constructor == Conta) {
			throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");
		}

		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
	}

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	// pegando os valores e retornando para uso
	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}
	//MÉTODOS

	// metodo abstrado, só funciona para ser sobrescrito
	sacar(valor) {
		throw new Error("o metodo da conta é abstrato")

	}
	_sacar(valor, taxa) {

		const valorSacado = taxa * valor;
		if (this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}

		return 0;
	}


	depositar(valor) {
		/*if (valor <= 0) {
			// fazendo a verificação de algo que não quero que aconteça, se acontecer o return vai parar a função e não fazer nada... mas se não acontecer, então vai ser executado o que estiver fora desse if
			return;
		}*/

		this._saldo += valor;
	}

	transferir(valor, conta) {
		/*if (this._tipo == "salario") {
			return;
		}*/
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}