/*
sistema de notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistemas de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/



// como eu fiz:
/*
let nota = 90

//let notaA = nota >= 90
//let notaB = nota >= 80 && nota <= 89
//let notaC = nota >= 70 && nota <= 79
//let notaD = nota >= 60 && nota <= 69
//let notaF = nota < 60

if (nota >= 90) {
  console.log('Sua nota é : A');
} else if (nota >= 80 && nota <= 89) {
  console.log('Sua nota é: B');
} else if (nota >= 70 && nota <= 79) {
  console.log('Sua nota é: C');
} else if (nota >= 60 && nota <= 69) {
  console.log('Sua nota é: D');
} else if (nota < 60) {
  console.log('Sua nota é: F');
} else {
  console.log('Nota inválida');
}
*/

// como ele ensinou: com a função pode testar se está funcionando

function notaAlunos(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota < 60 && nota >= 0
  
  let notaFinal

  if (notaA) {
    notaFinal ='Nota: A'
  } else if (notaB) {
    notaFinal ='Nota: B'
  } else if (notaC) {
    notaFinal = 'Nota: C';
  } else if (notaD) {
    notaFinal ='Nota: D';
  } else if (notaF) {
    notaFinal = 'Nota: F';
  } else {
    notaFinal = 'Nota inválida';
  }

  return notaFinal
}

console.log(notaAlunos(-1));
console.log(notaAlunos(101));
console.log(notaAlunos(100));
console.log(notaAlunos(1));
console.log(notaAlunos(0));
console.log(notaAlunos(60));
console.log(notaAlunos(71));
console.log(notaAlunos(65));
console.log(notaAlunos(87));
console.log(notaAlunos(56));
console.log(notaAlunos(42));
console.log(notaAlunos(37));
console.log(notaAlunos(92));

/*
function notaAlunos(nota) {
  let notaA = nota >= 90
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota < 60
  let notaFinal



  switch (nota) {
    case notaA:
      notaFinal = 'Sua nota é: A'
      break;
    case notaB:
      console.log('Sua nota é B');
      break;
    default:
      console.log('entrada invalida');
      break;
  }
  return notaFinal
}
console.log(notaAlunos(91));*/



// não consegui fazer no switch
/*let nota = 90

switch (nota) {
  case nota >= 90:
    console.log('A');
    break;
  case 'b':
    console.log('b');
    break;
  default:
    console.log('default');
    break;
}*/







