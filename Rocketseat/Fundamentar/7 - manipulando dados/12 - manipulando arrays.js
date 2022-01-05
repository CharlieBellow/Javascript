// manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim .push

techs.push("nodejs");

// adicionar no começo
techs.unshift("sql")

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()


//pegar somente alguns elementos do array 
  //.slice(posição de inicio do corte(posição do array), posição de final do corte, nesse caso conta o array a partir do 1 e não do zero, aí escolhe a posição que vc quer que ele pare) (cortar)
  // console.log(techs.slice(1, 3)); // 1 é a posição do array e 3 é o 3º item desse array, por isso ele pegou a paritir da posição 1 do array (que é o css) e parou de cortar até o 3 item (que é o js). por isso retornou o css e o js


// remover 1 ou mais items em qualquer posição do array
  // .splice(posição do array começando em zero (que é o index), e o segundo número diz quantos elementos eu quero tirar a partir dessa posição que eu indiquei) é o mesmo do slice, só que em vez de retornar o que você indicou nos parênteses, ele vai remover e retornar o resto que sobrou..
  // techs.splice(1, 3)

// encontrar a posição do array
let index = techs.indexOf('css') 
console.log(index);
// a posição do elemento no array é o index, por isso perguntamos o .indexOf. nesse caso, a variável index foi criada para que possa ser exibida no console.log

// se eu quiser remover o css agora:
//techs.splice(index, 1)
let indexHTML = techs.indexOf("html")
console.log(indexHTML);
let indexJS = techs.indexOf("js")
console.log(indexJS);
techs.splice(indexHTML, indexJS) // aqui eu descobri o index de dois elementos que são o começo e o final de um intervalo que eu queria tirar. então pedi pra remover todo o intervalo de um até o outro.. nesse exemplo o interalo era html, css e js que são linguagens do front, e deixei só as o back-end. essa "API" pode substituir o slice em alguns casos
console.log(techs);

