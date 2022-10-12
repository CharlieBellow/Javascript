/*let funcionario = { email: "abc@abc.com" };
let funcionarioProxy = new Proxy(funcionario, {
	get(target, prop, receiver) {
		console.log("Armadilha aqui!");
		return Reflect.get(target, prop, receiver);
	},
});
console.log(funcionarioProxy.email);
*/


/*let funcionario = { email: "abc@abc.com" };
let funcionarioProxy = new Proxy(funcionario, {
	get(target, prop, receiver) {
		console.log("Armadilha aqui!");
		return target[prop];
	},
});
console.log(funcionarioProxy.email);
*/

/* Há uma ligeira diferença entre as duas. Na primeira, get retorna uma função que é invocada para obter o valor da propriedade original, na segunda, o valor é retornado diretamente. Entenda que Reflect.get cria algo semelhante a uma getter. Você ainda lembra que um getter é uma espécie de função? */



class Funcionario {
	constructor(email) {
		this._email = email;
	}

	get email() {
		return this._email;
	}

	set email(email) {
		this._email = email;
	}
}

let funcionario = new Proxy(new Funcionario("abc@abc.com"), {
	get(target, prop, receiver) {
		console.log("Armadilha aqui!");

		return Reflect.get(target, prop, receiver);
	},
});

console.log(funcionario.email);