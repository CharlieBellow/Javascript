class Mensagem {
	// passando o paramentro texto='' eu tô dizendo que é possível criar a mensagem vazia ('') ou pode criar a mensagem passando um texto (texto). isso faz com que não precise sempre passar uma mensagem quando for criar ela 
	constructor(texto = "") {
		this._texto = texto;
	}

	get texto() {
		return this._texto;
	}

	set texto(texto) {
		this._texto = texto;
	}
}

