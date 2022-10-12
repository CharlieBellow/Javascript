/*
Funções
Projetos referentes ao curso "Funções" que ministrei pela Digital Innovation One.

Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/
/*
const alunos = [
  { nome: 'Charlie',
    idade: 28,
    nota: 9
  },
  
  {
    nome: 'Gustavo',
    idade: 26,
    nota: 10
  },

  {
    nome: 'Alex',
    idade: 19,
    nota: 5
  },

  {
    nome: 'Mônica',
    idade: 30,
    nota: 5
  },

  {
    nome: 'Miguel',
    idade: 30,
    nota: 4
  },
]


function mediaAlunos(arr, media) {
  //const media = 7.0
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {

    const { nome, nota } = arr[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados

}
console.log(mediaAlunos(alunos, 5));
;
*/

/*
Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/

const pessoa1 = {
  nome: 'Maria',
  idade: 30
}

const pessoa2 = {
  nome: 'carla',
  idade: 25
}

const Pedro = {
  nome: 'pedro',
  idade: 6
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//console.log(calculaIdade.call(Pedro, 7));
console.log(calculaIdade.apply(pessoa1, [7]));
