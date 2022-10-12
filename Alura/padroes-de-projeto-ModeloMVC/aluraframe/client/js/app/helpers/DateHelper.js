class DateHelper {

  constructor() {
    throw new Error('A classe DateHelper não pode ser instânciada')
  }
  // métodos estáticos pertencem a definição da classe e fazendo assim evita de ter que criar uma instância. aí é só colocar DateHelper.textoParaData() pra chamar a função estátia
  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Deve seguir o padrão aaaa-mm-dd')
    
    return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
    // quando tem um arrow function e essa função só tem uma linha pode colocar tudo na mesma linha(inline) e não precisa colocar o return pq a função já retorna pra mim.
  }

}