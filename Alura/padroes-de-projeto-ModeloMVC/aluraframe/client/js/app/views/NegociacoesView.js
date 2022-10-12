class NegociacoesView extends View {
	/* A palavra super, como já vimos, nos dá acesso à superclasse, ou seja, a classe que foi herdada. Mas atenção! A chamada do construtor da classe pai deve ser a primeira instrução no construtor da classe filha. */
	constructor(elemento) {
		super(elemento);
	}

	template(model) {
		return `
    <table class="table table-hover table-bordered">
	    <thead>
        <tr>
          <th onclick="negociacaoController.ordena('data')">DATA</th>
          <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
          <th onclick="negociacaoController.ordena('valor')">VALOR</th>
          <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${model.negociacoes.map(n => `
          <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
          </tr>
          `
        ).join('')}
      </tbody>

      <tfoot>
        <td colspan="3"></td>
        <td>
        ${model.volumeTotal}
        </td>
      </tfoot>
    </table>;
    `;
	}
}

//função auto-invocável
				/*  (function () {
      let total = 0;
      model.negociacoes.forEach(n => total += n.volume)
        return total;
    })()*/
				// usando arrow function