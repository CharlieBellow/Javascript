import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta {
	constructor(saldoInicial, cliente, agencia) {
		/*this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;*/
		super(saldoInicial, cliente, agencia)
	}

	sacar(valor) {
		const taxa = 1.02;
		return this._sacar(valor, taxa)
	}
	
	//MÉTODOS

	/*sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	}

	depositar(valor) {
		if (valor <= 0) {
			// fazendo a verificação de algo que não quero que aconteça, se acontecer o return vai parar a função e não fazer nada... mas se não acontecer, então vai ser executado o que estiver fora desse if
			return;
		}

		this._saldo += valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}*/
}