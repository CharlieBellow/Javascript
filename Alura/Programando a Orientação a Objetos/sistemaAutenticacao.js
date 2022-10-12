/* 
Ser autenticável significa ter o metodo autenticar

*/

export class SistemaAutenticacao{
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel) {
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
  }
}

//essa classe evita que a gente fique verificando em cada funcionário ou cliente. isso é conhecido como Duck Typing