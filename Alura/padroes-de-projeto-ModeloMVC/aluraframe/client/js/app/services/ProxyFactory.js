class ProxyFactory {
  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      get(target, prop, receiver) {
        if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
          return function () {
            console.log(`interceptando ${prop}`);
            let retorno = Reflect.apply(target[prop], target, arguments);
            acao(target);
            return retorno;
          }
        }
        
        return Reflect.get(target, prop, receiver);

      },

        // depois de alterar a propriedade ele executa o interceptador
      set(target, prop, value, receiver) {
        let retorno = Reflect.set(target, prop.charAt, value, receiver);
        if (props.includes(prop))
          acao(target);
        return retorno;
      }
    });
  }

  static _ehFuncao(func) {
    return typeof (func) == typeof (Function);
  }
}