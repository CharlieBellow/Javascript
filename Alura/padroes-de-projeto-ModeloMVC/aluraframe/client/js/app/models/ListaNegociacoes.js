class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  } 

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // no lugar de passar a mesma lista das negociaççoes que permite que a pessoa altere, é só mandar uma nova lista de array com as negociações.
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
  }

  get volumeTotal() {
    return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
  }

  ordena(criterio) {
    this._negociacoes.sort(criterio)
  }

  inverteOrdem() {
    this._negociacoes.reverse()
  }
}