//Type conversion (typecasting) vc type coersion

console.log(Number('9') + 5);
 

/*

FALSY
Quando um valor é considerado false em contextos onde um booleano é obrigatório  (condicionais e loops)

false:
0
-0
""
null
indefined
NaN
*/

console.log(true ? 'verdadeiro' : 'falso');
console.log(0 ? 'verdadeiro' : 'false'); // como zero nao é booleano, vai ser false
console.log();


/*
TRUTHY (confiável)
Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

true:
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity

*/

console.log( {} ? "verdadeiro" : "falso"); // como um objeto vazio nao consegue comparar com nada, então dá verdadeiro