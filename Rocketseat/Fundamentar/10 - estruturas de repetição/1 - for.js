// Estruturas de repetição


// for (para) (para essa condição, faça isso)



// lê: enquanto essa variável que foi declarada for verdadeira, ou seja, nessa caso enquanto for menor que dez, execute isso que está dentro do bloco {}. depois disso, ele vai analisar a proxima instrução (separada por ;), ou seja, i++ que no caso, quer dizer que vai incrementar mais um e executar novamente...
for (let i = 0; i <= 10; i++) {
  console.log(i);
} 
  
  // decrementando
for (let i = 100; i > 0; i--) {
  console.log(i);
}


// controlando o que aparece: 
// break - para a execução do loop
for (let i = 100; i > 0; i--) {
  if (i === 50) {
    break;
  }
  console.log(i);
} // nesse caso ele para no 51

// pulando alguns números
// continue - pula a execução do momento
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} // nesse caso ele pula o número 5

