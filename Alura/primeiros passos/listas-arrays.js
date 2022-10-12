console.log("trabalhando com listas");

const listadestinos = new Array("Salvador", "São Paulo", "Rio de janeiro");

listadestinos.push("curitiba"); // adicionando mais um item na lista declarada

listadestinos.splice(1, 1); // deletando um item da lista na posição 1 (que começa com index zero), e vai deletar apenas um item (então ele vai deletar o segundo elemento)

console.log(listadestinos);

console.log(listadestinos[0]); // pegando apenas um elemento da lista, como i index começa em zero, então estou pegando o primeiro item.

console.log(listadestinos[0], listadestinos[2]); // pegando 2 elementos da lista


// contando elementos da lista

const destino = 'São Paulo'
let contador = 0;
let destinoExiste = false;

while (contador < 3) {

  if (listadestinos[contador] === destino) {
    console.log('destino existe');
    break;
  } else {
    console.log('destino não existe');
  }
  contador += 1;
}


// console.log('esses são os elementos da minha lista : ' + listadestinos[contador]);