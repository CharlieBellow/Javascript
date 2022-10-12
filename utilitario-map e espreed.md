### Para saber mais: Funções importantes dentro do React com Javascript

Assim como foi apresentado nos vídeos anteriores, chegou a hora de utilizarmos algumas funções úteis e recordaremos mais sobre elas, para que você não tenha dúvidas na hora de começar a fazer lógica da sua aplicação!

As funções: map, spread operator, ternariese destructuring.

# map()
O map é um método MUITO importante, pois como no React existe essa combinação grandiosa entre reaproveitamento de código e renderização dinâmica, o map é o método perfeito para isso, pois você consegue iterar sobre todos os itens e retornar alguma coisa no mesmo index que está sendo iterado no laço atual, ou seja:
```js
const tecnologias = ['React', 'Typescript', 'Javascript'];

//Se você faz isso daqui:

const tecnologiasComJSX = tecnologias.map(tecnologia => <li> {tecnologia} </li>)

```

Nesse caso, a variável tecnologiasComJSX será [<li> React </li>, <li> Typescript </li>, <li> Javascript </li>]

Com isso transformamos todos os itens deste array em JSX!! Essa é a magia map!!

# Spread Operator
O Spread Operator é muito importante para fazer atualizações em estados, pois quando queremos atualizar estados, é comum termos parte do estado que não será alterado, veja esse caso:
```js
let curso = {
  instrutor: "Luiz Fernando",
 curso: "React com Typescript"
}


// Caso queiramos adicionar o ano em que o curso foi lançado, podemos fazer isso:

curso = {
  …curso,
  ano: 2021
}


// Esse ...curso dentro das chaves significa que dentro daquele novo objeto que está sendo criado terá tudo que curso tinha e o ano que faltava, ficando assim:

{
  instrutor: "Luiz Fernando",
  curso: "React com Typescript",
  ano: 2021
}
```

# ternaries
Ternários são bem importantes para a parte renderização condicional do React, pois ele permite que consigamos renderizar JSX de forma condicional, adicionar classes de forma condicional, mudar estados de forma condicional, entre outros.

- Exemplo de ternário em JSX

```js
return (
  <>
    {condicao ?
      <p> Atende a condição </p>
    :
      <p> Não atende a condição </p>
    }
  </>
)

// Nesse caso dou uma menção honrosa ao operador &&, que nos permite renderizar de forma condicional também, mas sem a necessidade do :, ou seja, de um else:

return (
  <>
    {condicao &&
      <p> Esse JSX só vai renderizar se a condição for verdadeira </p>
    }
  </>
)

```

- Exemplo de ternário em classes CSS

```js
return (
 <button className={condicional ? "classe-com-condicional" : "classe-sem-condicional"}>
    Meu botão
  </button>
)
```

- Exemplo de ternário em mudança de estado

```js
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
…
setCurso({
  nome: "React com Typescript",
  completado: false,
  completado: condicao ? true : false
})
```

# destructuring
Para finalizar, o destructuring é muito útil para podermos aproveitar estados anteriores e mudarmos alguma coisa, vamos escrever o exemplo acima:

```js
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
…
setCurso({
  …curso,
 completado: condicao ? true : false
})
```
