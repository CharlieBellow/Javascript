/*Operator precedence   
     

    Precedência dos Operadores

* grouping                        ( )
* negação e incremento            !  ++  --
* multiplicação e divisão         *  /
* adição e subtração              +  -
* relacional                      <  <=  >  >=
* igualdade                       == !=  ===  !==
* AND                             &&
* OR                              ||
* condicional                     ?:
* assignment (atribuição)         =  +=  -=  *=

*/
console.log( (2 + 5) * 10); // grouping/ agrupadores
console.log(3 > 2 > 1); // false
console.log(3 > 2 == 1); // true
console.log(3 > 2 && 2 > 1); // os relacionais vem primeiro, por isso ele faz os relacionais e depois compara

// obs: ligado e desligado
//false é igual a 0 
//true é igual a 1