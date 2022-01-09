//serve para tentar executar um código, e se der erro esse erro vai ser capturado


// throw (disparar, lançar)

function sayMayName(name = '') {
  if (name === '') {
    throw new Error(" Nome é necessário") // novo objeto do tipo error
    // throw 'nome é obrigatório' // pode ser feito assim também..
  }
  console.log(name);
}

// try..catch (tentar e capturar)
try {
  sayMayName('Mayk')
} catch (e) {
  console.log(e);
}
console.log('após o try... catch');

//obs: se eu não coloco o try, catch eu tenho um erro de execução 'uncaught' (não pegou) 

// serve pra capturar erros e perceber falhas na aplicação... mas o que é isso na prática? tem exemplo?