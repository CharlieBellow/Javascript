// é uma forma de programar

// o que são classes?
// São modelos usados para criar objetos
// nela definimos as propriedades e os métodos

class Pessoa {
  constructor(nome, sobrenome, cpf, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.email = email
  }
  // a classe define os atributos (caracteristicas) e os métodos (comportamentos) que um objeto baseado na classe vai ter
  
  
  exibirNomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
}

// Herança
// permite que uma classe herde características de outra classe

//ex.

class Programador extends Pessoa {
  constructor(nome, sobrenome, cpf, email, linguagem) {
    // o super faz referência ao constructor da classe pessoa. é o mesmo que a função Pessoa.call()
    super(nome, sobrenome, cpf, email)
    this.linguagem = linguagem
  }
}

// OBJETO: 
// É a instância de uma classe 

const novoDev = new Programador("andré", "silva", "andre@email.com", "javascript")
/* objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtor */


//lembrando que existem mais formas de se criar um objeto:

/* 

Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

*/

// mais formas de criar objetos 

//const obj = { a: 1 } /* utilizam Object.prototype como protótipo */

//Object.create({ b: 2 }) /* Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null */


// Na POO a ideia é transformar coisas do mundo real para código

// Classe na prática
// SEMPRE USA LETRA MAIÚSCULA
class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  // métodos (não precisa da palavra function)
  depositar(valor) {
    this.saldo += valor
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

const andre = new Cliente("andre", "andre@email.com", "12345667333", 100)

andre.exibirSaldo() // mostra o saldo
console.log(andre); // mostra o objeto


/* 
O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.

No caso de atributos das funções construtoras ou dos construtores de classe, o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto

É possível manipular os valores de this e o JavaScript tem três métodos para isso

# call()
Esse método permite que uma função seja chamada com parâmetros e valor de this específicos. 

imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

Como a função está sendo chamada como objeto do método call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos.

O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.

# apply()
O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:

Chamando imprimeNomeEmail com o método apply() e passando um array de dados como segundo parâmetro (lembrando que o primeiro parâmetro de apply() se refere ao contexto de this, igual ao método call():

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com


Utilize o método apply() caso você tenha um array de dados e o call() para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.


# bind()
O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:

const personagem = {
 nome: "Princesa Leia",
 apresentar: function(){
   return `a personagem é ${this.nome}`
 }
}

O objeto acima contém uma propriedade nome e um método apresentar que retorna um string com nome; this.nome liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, “este objeto”.

Vamos ver o que acontece se tentarmos executar essa função a partir de outro contexto:

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this.

Ressolvemos este problema com bind():

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

Acima, utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem. Assim, sempre que esta função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. Dessa forma, this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.

*/

// fazendo uma classe herdar da outra
class ClientePoupanca extends Cliente{
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  //metodo
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor
  }
}

const paula = new ClientePoupanca("paula", "p@email.com", "4452114511", 100, 200)

console.log(paula);

paula.depositarPoupanca(50)

console.log(paula);


const alura = new ClientePoupanca("alura", "a@email", "453521285215", 300, 400)

alura.depositarPoupanca(50)

/* 

Nessa aula, você aprendeu:
Que classes e objetos são alguns dos principais conceitos da Programação Orientada a Objetos;
Como utilizar uma classe como modelo para construir objetos com propriedades e métodos;
Como utilizar a herança de classe com extends para criar objetos a partir de modelos específicos.

*/