import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
	// colocando o static o número de contas vai ser alterado ara todas as contas criadas
	static numeroDeContas = 0;
	//ASSESSORES
	/*agencia;
	_cliente;*/
	//_saldo = 0; // atributo privado

	//ATRIBUTOS
	// get e set igual ao que eu aprendi no C# (dando a possibilidade de mudar o cliente mas de forma controlada)
	// atribuindo valores ao cliente
	/*set cliente(novoValor) {
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
	}*/

	constructor(cliente, agencia) {
		/*this.agencia = agencia;
		this.cliente = cliente;
		this._saldo = 0;*/

		super(0, cliente, agencia); // pra que ele chame o construtor da classe conta
		// contando as contas. preciso referencia a conta como um todo pra que ele faça a contagem geral de todas as contas
		ContaCorrente.numeroDeContas += 1;
	}

	//MÉTODOS

	// o método sacar está sobrescrevendo o comportamento de sacar da classe conta
	sacar(valor) {
		let taxa = 1.1;
			return this._sacar(valor, taxa)
	}
	

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


/* 

O que aprendemos nessa aula:

Especializando código

Herdando propriedades e atributos

Sobrecarga de métodos

Compartilhando código de forma segura

Mantendo nosso código na linguagem do cliente

Evitando código muito complicado através da herança

Palavra-chave Super

Método e propriedades privadas e protegidas


*/
