// arrow function =>
// versão inteira:
const helloworld = function () {
	return 'Hello World';
};
// para mis de uma  linha
const helloWorld = () => {
  return "hello world"; 
}
// quando tem apenas uma linha com o return
const helloWorld = () => "HELLO WORLD";

// Caso tenha só uma linha, dispensa as chaves e o retorno.

// caso exista apenas um parâmetro pode dispensar os parenteses

// a arrow function não faz hoisting

// restrições:

/* 

"this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;

- Não existe o objeto "arguments";

O construtor (ex: new MeuObjeto()) também não pode ser utilizado.

*/



