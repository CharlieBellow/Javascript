/*  # Buscando e contando dados em Arrays

Baseado no Array de livros por categoria abaixo, faça os seguintes desafios:

* contar o número de categorias e o número de livros em cada categorias 
* contar o número de autores de
* mostrar livros do autor Augusto curry 
* transformar a função acima em função que irá receber o nome do autor e devolver os livros desse autor

*/

const bookByCategory = [
  {
    category: 'Riqueza',
    books: [
      { 
        title: "os segredos da mente milionaria",
        author: "T. Harv. Eker",
      },
      {
        title: "o homem mais rico da babilonia",
        author: "George ....",
      },
      {
        title: "pi rico pais pobre",
        author: "robert ...."
      }
    ],
  },
  {
    category: 'inteligencia emocional',
    books: [
      {
        title: "voce é insubistituivel",
        author: "augusto cury",
      },
      {
        title: "ansiedade - como enfrentar o mal do seculo",
        author: "augusto cury",
      },
      {
        title: "os 7 habitos das pessoas altamente eficazes",
        author: "stepeh ....",
      }
    ],
  },
];

// o que consegui fazer:

//console.log(bookByCategory.length);
//console.log(bookByCategory[{author}.length]);
// console.log(bookByCategory[{ category: 'Riqueza'.length }]


// como ele ensinou..
const totalCategories = bookByCategory.length

console.log(totalCategories);
for (let category of bookByCategory) {
  console.log('total de livros da categoria: ', category.category)
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of bookByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }

  console.log("Total de autores:", authors.length);
}

countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of bookByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
          books.push(book.title)
      }
    }
  }

  console.log(`Livros do Autor ${author}: ${books.join(", ")}`); // o .join() transforma um array em string. dentro dos parenteses coloca que tipo de separação quer.. aqui coloquei uma vírgula e um espaço
}

booksOfAuthor('George ....');