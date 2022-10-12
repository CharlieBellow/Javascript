/*  nessa arquivo guardo todos os comandos e funções que eu costumo pesquisar. serve como consulta para algo que eu queira fazer */


/* PEQUENAS FUNÇÕES ----------------------------------------*/

// o .focus() faz com que o campo do formulário já receba o foco pra pessoa preencher 
    this._inputData.focus();



/* DICAS DE COMO FAZER... ------------------------------------*/

// mexer com datas
/*let dataString = "17-05-2016";

let data = new Date(dataString.split("-").reverse().join("/"));
*/

//é só criar a classe de ajuda

class DateHelper {
	constructor() {
		throw new Error("DateHelper não pode ser instânciada");
	}
	// métodos estáticos pertencem a definição da classe e fazendo assim evita de ter que criar uma instância. aí é só colocar DateHelper.textoParaData() pra chamar a função estátia
	static dataParaTexto(data) {
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}

	static textoParaData(texto) {
		if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) // essa expressão regular valida se uma data está correta ou não
			throw new Error("Deve seguir o padrão aaaa-mm-dd");

		return new Date(
			...texto.split("-").map((item, indice) => item - (indice % 2))
		);
		// quando tem um arrow function e essa função só tem uma linha pode colocar tudo na mesma linha(inline) e não precisa colocar o return pq a função já retorna pra mim.
	}
}

//console.log(data);

// se o número for ímpar soma mais 2. pra isso peguei o index do array calculei módulo de 2 (ou seja, se o numero for par, o módulo é zero, se o n´umero for impar o módulo é sempre 1) e comparei com 1. Nesse caso os números ímpares sempre serão 1. e quando a condição for 1 ele vai somar mais dois.
let numeros = [3, 2, 11, 20, 8, 7];
let novosNumeros = []

for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] % 2 === 1) {
		novosNumeros.push(numeros[i] += 2);
  } else {
    novosNumeros.push(numeros[i]);
  }
}

//console.log(novosNumeros);


// spread operator
// assim não precisa fazer numeros[0], numeros[1]
function somaDoisNumeros(numero1, numero2) {
	return numero1 + numero2;
}
numeros = [10, 30];
//console.log(somaDoisNumeros(...numeros));



// arraow functions

class Aluno {
	constructor(matricula, nome) {
		this.matricula = matricula;
		this.nome = nome;
	}
}

class Prova {
	constructor(aluno, nota) {
		this.aluno = aluno;
		this.nota = nota;
	}
}

let avaliacoes = [
	new Prova(new Aluno(1, "Luana"), 8),
	new Prova(new Aluno(2, "Cássio"), 6),
	new Prova(new Aluno(3, "Barney"), 9),
	new Prova(new Aluno(4, "Bira"), 5),
];

/*let aprovados = avaliacoes
	.filter(function (prova) {
		return prova.nota >= 7;
	})
	.map(function (prova) {
		return prova.aluno.nome;
	});*/

  // a arrow function se tiver só uma linha pode ser escrita na mesma linha(inline e ela já retorna, então não precisa do return )

let aprovados = avaliacoes.filter( prova => prova.nota >= 7).map(prova => prova.aluno.nome)

console.log(aprovados);


	// chamando a função a exibeMensagem a cada 1 segundo
	setInterval(atualizaTela, 10);



	      // o evento keyCode mostra qual tecla foi pressionada. lembrando que evento é um parâmetro que exist por baixo dos panos do JS e por isso não vemos ele no código. ao chamar o document.onkeydown ele vai pegar esse evento e mostrar na tela com o console log

       function mostraTecla(evento) { 
        console.log(evento.keyCode)
      } 
        document.onkeydown = mostraTecla;


				// explicando o laço de repetição
  // o contador é de onde vai começar
  var contador = 0;
  // o outro numero é onde vai parar
  var num = 10;

  // se quiser incrementar (+) fica: contador(valendo 0) <= numero(valendo 10), se quiser decrementar (-) o contador, fica assim: contador (valendo 10) >= numero(valendo 0)
  while (contador <= num) {
    console.log(contador);
    contador = contador + 1;

  }

  console.log(contador);