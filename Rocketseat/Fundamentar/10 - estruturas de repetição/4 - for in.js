// for ... in


/*
for (in) {

}

*/

let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

// pegue uma propriedade em person
for (let property in person) {
  console.log(property)
  console.log(person[property]) // 1ª forma de acessar a propriedade de person
  //console.log(person.name); // 2ª forma de acessar
  //console.log(person["name"]); // 3ª
}