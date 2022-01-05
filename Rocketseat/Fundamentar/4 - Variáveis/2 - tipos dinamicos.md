## Tipos dinâmicos:

0 JS é uma linguagem fracamente tipada e dinâmica

- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

```js
let clima // a variável foi criada, mas vai aparecer como undefined pq não foi atribuído valor
let clima:string //exemplo de linguagem fortemente tipada. nessas linguagens pede o tipo da variável. mas no JS não precisa disso
  let clima = ""

  console.log(typeof clima) // para ver o tipo da variável que foi criada

  let climas = "" // era uma string

  climas = 25 // viru um número
  // ou seja, mudar o tipo significa que é dinâmico

  console.log(typeof climas) // para ver o tipo da variável que foi criada

```
