//if (se)

var jogador1 = 0;
var jogador2 = 0;
var placar;

// if else
// if (jogador1 > 0) {
//     console.log('jogador 1 marcou ponto!')
// } else {
//     console.log('ninguém marcou ponto')
// }


// //if else if
// if (jogador1 > 0) {
//     console.log('jogador 1 marcou ponto!')
// } else if (jogador2 > 0) {
//     console.log('jogador 2 marcou ponto')
// } else {
//     console.log('ninguém marcou ponto')
// }

//ninho de ifs
// if (jogador1 != -1) {
// 
//     if (jogador1 > 0) {
//         console.log('jogador 1 marcou ponto!')
//     } else if (jogador2 > 0) {
//         console.log('jogador 2 marcou ponto')
//     } else {
//         console.log('ninguém marcou ponto')
//     }
// }

//if ternário

// jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') :
//     console.log('jogadores inválidos')
//     if (jogador1 > 0) {
//         console.log('jogador 1 marcou ponto!')
//     } else if (jogador2 > 0) {
//         console.log('jogador 2 marcou ponto')
//     } else {
//         console.log('ninguém marcou ponto')
//     }

// outra opção com o código melhor
// 
/* jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') :
    console.log('jogadores inválidos')

    if (jogador1 > 0 && jogador2 == 0) {
         console.log('jogador 1 marcou ponto!')
         placar = jogador1 > jogador2
         
    } else if (jogador2 > 0 && jogador1 ==0) {
        console.log('jogador 2 marcou ponto')
        placar = jogador2 > jogador1
// //         
    } else {
         console.log('ninguém marcou ponto')
        }
*/

// Usando switch/case
//O “switch/case” funciona como uma estrutura condicional também;
/* Ex.: switch (${expressao}) {
    case 1:
        ${ instrucao };
    break; // lembrar de usar o break para que não fique em loop infinito
    case 2:
        ${ instrução };
    break;
    } */
/*
jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') :
    console.log('jogadores inválidos')

    if (jogador1 > 0 && jogador2 == 0) {
         console.log('jogador 1 marcou ponto!')
         placar = jogador1 > jogador2
         
    } else if (jogador2 > 0 && jogador1 ==0) {
        console.log('jogador 2 marcou ponto')
        placar = jogador2 > jogador1
       
    } else {
         console.log('ninguém marcou ponto')
    }

    switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('jogador 1 ganhou');
            break;
        case placar = jogador2 > jogador1:
            console.log('jogador 2 ganhou');
            break;
        default:
            console.log('ninguém ganhou'); // se nenhuma das anteriores or atendida, vai dizer qu ninguém ganhou
    }
*/
/* ESTRUTURAS DE REPETIÇÃO

Laços de repetição
São estruturas condicionais que repetem uma instrução até atingir determinada condição:
• For;
• For/in;
• For/of;
• While;
• Do/while;

# For
Funciona como uma repetição de instrução até que a condição seja falsa:

for ([expressaoInicial]; [condicao]; [incremento]) {
declaracao }

Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]
    for (let i = 0; i < array.length; i++) {
        console.log(i);
}
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

//# For
//Funciona como uma repetição de instrução até que a condição seja falsa:

// for (let indice = 0; indice < array.length; indice++){
//     console.log(indice)
// }

/*
# For/in
Funciona como uma repetição a partir de uma propriedade:

for ([indice] in [objeto ou array]) {
declaracao }

Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]
        for (i in array) {
            console.log(i);
    }

//com array
for (let i in array) {
    console.log(i)
}
//com object
for (i in object) {
    console.log(i)
}
*/
/*
For/of
Funciona como uma repetição a partir de um valor:

for ([indice] of [array]) {
declaracao }

Ex.: var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]
        for (i of array) {
        console.log(i);
}

//com array
for (i of array) {
    console.log(i)
}
*/

/*

O For/of não funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre serão números inteiros.
Mas e se eu quiser pegar o valor mesmo assim?
Ex.: for (i of object.propriedade) {
console.log(i);
}

// porém cada caractere dentro do valor será
Impresso em linhas separadas.


//com object
for (i of object.propriedade1) {
    console.log(i)
}
*/
/*
# While
Executa uma instrução “enquanto” determinada condição for verdadeira, a verificação é feita antes da execução;

Ex.: var a = 0;
    while (a < 10) {
        a++;
        console.log(a);
}
// como ler: enquanto a variável a for menor que 10 ela
vai receber mais um e imprimir no console.


var a = 0;
while (a < 10) {
    a++;
    console.log(a)
}
*/
/*
# Do/while
Executa uma instrução “até que” determinada condição seja falsa, a verificação é feita depois da execução;
Ex.: var a = 0;
        do {
        a++;
        console.log(a);
    } while (a < 10)

// como ler: a variável a vai receber mais um e imprimir no console até que seu valor chegue a 10

var a = 0
do {
    a++;
    console.log(a);
} while (a < 10);
*/


