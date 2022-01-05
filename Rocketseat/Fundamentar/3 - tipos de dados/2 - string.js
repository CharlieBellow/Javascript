/*String

* Cadeia de caracteres (texto)

"" // aspas duplas

' // aspas simples

`` // (crase) template literals ou template strings.
A crase permite:

    * que os dois tipos de aspas apareçam na tela 
    * que seja possível quebrar a linha sem bugar o código. 
    * permite também usar expressões da linguagem, ex: ${1+1} dentro da string (a isso é dado o nome de interpolação)

se quiser que as aspas duplas apareçam na tela, coloca a string entre aspas simples.
*/


console.log('cha"rli"e')
console.log(`sua idade é ${28+1}`) // isso é uma interpolação (string + expressão da linguagem)