# Scope

* Escopo determina a visibilidade de alguma variável no JS


# Block statement (DECLARAÇÃO DE BLOCO)

```js

// vamos iniciar um bloco

{

// aqui dentro é um bloco e posso colocar qualquer código

} // aqui fechamos o bloco
```

0 bloco, também criará um novo escopo. Chamamos de block-scoped


## var
```js 
// var é global e poderá funcionar fora de um escopo de bloco

// var é global e também local
//hoisting

// var x  - no hoisting o JS pega a variável declarada embaixo e coloca aqui em cima, por isso é global
console.log('> existe x antes do bloco?', x); // imprimindo a variável var antes de declarar ela

{

  var x = 0 // se declarar a variável var depois que vc imprime ela no console, acontece o efeito hoisting
  // x = 0 - no hoisting o JS depois de pegar a variável var e colocar em cima ele atribui o valor dela aqui

}

console.log('> existe x depois do bloco?', x);
```

## Let e const

```js

/*{
  let y = 0
  console.log('> existe y?', y)
  // com a variável let só pode ter variável dentro do bloco dela e depois dela ser declarada, se imprimir a variável no console antes de declarar ela, também dá errado.. 

}

console.log('> existe y depois do bloco? ', y) */
// se imprimir a variável let depois do bloco dela, ela não vai existir

// ## let declarado fora do escopo

/*let y = 1;

{
  y = 0
  console.log('> existe y?', y)

}

console.log('> existe y depois do bloco? ', y) */
// nesse caso, a variável let foi declarada fora do escopo, e por isso ela é considerada mesmo que tenha sido mudada dentro do escopo. por isso, o y aqui é zero, pois ele leva em conta a reatribuição da variável let y dentro do bloco

// # const

// podemos criar duas const com o mesmo nome, desde que seja em blocos diferentes
// mas não pode ter uma let e uma const com o mesmo nome, pq ambasvão procurar fora do escopo e vai dar conflito

const y = 1;

{
  const y = 0 // aqui é a constante de dentro do bloco
  console.log('> existe y?', y)

}

console.log('> existe y depois do bloco? ', y) // aqui a const é a que foi declarada em cima do bloco

```