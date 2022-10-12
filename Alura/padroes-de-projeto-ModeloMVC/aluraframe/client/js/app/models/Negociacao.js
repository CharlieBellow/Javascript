class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    // com o freeze eu congelo as propriedades do objeto e impeço elas de serem alteradas
    Object.freeze(this);
  }



  // encapsulamento - só os métodos da classe podem mudar as propriedades
  // métodos acessadores- servem para que as propriedades privadas sejam acessadas mas não alteradas
  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    // o getTime garante que a propriedade não vai ser mudada
    return new Date(this._data.getTime());
  }
  
  get quantidade() {
    return this._quantidade;
  }
  
  get valor() {
    return this._valor;
  }
}