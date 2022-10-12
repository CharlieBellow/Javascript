// incluindo linhas na tabela de acordo com a entrada do usuário

var campos = [
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor"),
];

console.log(campos);

var tbody = document.querySelector('table tbody')

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault()
  // criando a tabela com o ja]vascript
  var tr = document.createElement('tr');
  campos.forEach(function (campo) { 
    // as duas pŕoximas linhas criam a linha e preenchem a primeira coluna
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td); //incluindo a td na tr
  });
  
  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value = campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  //limpar os campos assim que o formulário for submetido
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0

  //colocando o foco no campo da data
  campos[0].focus();

});



