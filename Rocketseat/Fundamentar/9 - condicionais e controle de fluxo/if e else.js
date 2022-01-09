// if e else

// Sua sintaxe é simples, como pode ver a seguir:

/*if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}*/


// ex. medindo a febre

/*let temperature = 36.6

if (temperature >= 37) {
  console.log('Febre');
} else {
  console.log('saudável');
}
*/
// ex. mais complexo

/*let temperature = 39

if (temperature >= 37.5) {
  console.log("febre alta");
} else if (temperature < 37.5 && temperature >= 37) {
  console.log('febre moderada');
} else {
  console.log('saudável');
}
*/
// obs: 
// 1 - quando tem s'uma linha de código dentro do bloco {}, pode escrever o if else sem os blocos. mas não é recomentado.. ex.:

/*if (temperature >= 37.5)
  console.log('febre alta');
else if (temperature < 37.5 && temperature >= 37)
  console.log('febre moderada');
else 
  console.log('saudavel');*/

//2 - transforme as condicionais em variáveis relevantes que digam o que vc está fazendo..

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('febre alta');
} else if (mediumTemperature) {
  console.log('febre moderada');
} else {
  console.log('saudavel');
}

// 3- essas condicionais entre parenteses vão aceitar valores truthy ou falsy

/*if ({}) { 
  // nesse caso, como o bloco vazio é sempre verdadeiro, (truthy), então o programa sempre vai cair nessa condição.. 
  console.log('febre alta');
} else if (midiumTemperature) {
  console.log('febre moderada');
} else {
  console.log('saudavel');
}*/

//4 - se a primeira condição já for verdadeira, todas as outras serão descartadas.. então a ordem em que as condições serão escritas é importante para que o programa execute bem 



//como se lê: 
/*

if (se acontecer isso que tá aqui no parenteses) {
  então você faz isso que ta dentro do bloco
} else if (SE NÃO, SE acontecer isso que tá nesse parentese) {
  então executa o que tá dentro desse outro bloco.
} else { 
  se não for nenhuma dessas que eu falei..executa isso aqui dentro desse outro bloco
  perceba que aqui no ultimo else não tem parênteses pq não tem mais condição... ou seja, em caso de qualquer outra condição que não foi prevista acima, você executa o que tá dentro do bloco do else.
}

*/
