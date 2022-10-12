/* 


O objeto serve para guardar informações que estão relacionadas. Ex:

- no array guardamos uma lista de itens do mesmo tipo, ou seja, um array de ingredientes vai ter: cebola, farinha, tomate, banana, alho, pimentão... mas se eu quiser separar por tipos... exemplo: frutas, verduras e etc.. no array não é possível, eu teria que criar mais arrays e tentar relacionar eles de uma forma.. não fica legal... 

- o objeto é mais completo e consegue guardar essas informações relacionadas. Ele permite colocar a descrição e o tipo da coisa. ex:
*/

const meuObjeto = {
	nome: "Charlie",
	idade: 28,
	profissao: "psicologo",
};

const cliente = {
	// nome é a chave / andré é o valor
	nome: "André",
	idade: 26,
	cpf: "123456789",
	email: "andre@email.com",
};

// acessando informações do objeto - notação de ponto: cloca o nome do objeto seguido de . e a chave que quer acessar

console.log(cliente.nome); // André

// exibindo minhas informações
console.log(`Meu nome é ${meuObjeto.nome} e tenho ${meuObjeto.idade} anos`); // meu nome é Charlie e tenho 28 anos

//exibindo apenas os numeros do meio do cpf..

console.log(cliente.cpf.substring(0, 3));

// consultar um objeto usando uma lista de chaves - notação de colchetes
const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

// percorrendo o array pra mostrar todas as chaves 

chaves.forEach(info => console.log(cliente[info]));

// se eu sei qual é a chave, poso passar diretamente entre aspas quando usar colchetes

console.log(cliente["nome"]);

// se tentar acessar uma chave que não exist não vai dar erro, só da indefinido

console.log(cliente["contas"]);



// ADICIONANDO INFORMAÇÕES (chave e valor) E ALTERANDO OBJETOS

cliente.telefone = "5588994444" // parece que está reatribuindo o valor de uma variável

// se já existir a informação e quero alterar o numero de telefone é possível

cliente.telefone = "8554653282124"
console.log(cliente);


// deletando uma chave junto com seu valor
delete cliente.telefone;
console.log(cliente);
//ou
delete cliente["telefone"];

const objPessoa = {
  nome: "Peter Parker",

}

objPessoa.cpf = "55555555555"


/* 

Nessa aula, você aprendeu:
Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.

*/



