// callback function


function sayMyName(name) {
  console.log('antes e executar a funcao callback')

  name()

  console.log('depois de executar a callback');

}

//sayMyName({ name: 'charlie' })

// posso passar qualquer tipo de dado para a função, inclusive outras funções

sayMyName(
  () => {
    console.log('estou em uma callback');
  }
)