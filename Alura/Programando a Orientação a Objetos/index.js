// CLASSES

// As classes são moldes criados para que um mesmo código se repita. tipo o molde pra fazer uma flor de barro em uma indústria

// a classe define o que eu quero ter dentro e depois eu crio um objeto com esses moldes da classe

// MÓDULOS - referenciando meus arquivos de classes

import {Cliente} from "./Conta/Cliente.js"
//import { ContaCorrente } from "./Conta/ContaCorrente.js"
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import {ContaSalario} from "./Conta/ContaSalario.js"
// pra trabalhar com arquivos separados tem que rodar o npm init na pasta do programa


/*
para acessar algum cliente criado dentro da classe, coloca o nomeDoCliente.dadoQueVcQuer*/
//const cliente1 = new Cliente("Ricardo", 112155223); // esse novo objeto criado é uma instância da classe

// aqui estou preenchendo esses dados que eu falei que o cliente ia ter
//cliente1.nome = "Ricardo";
//cliente1.cpf = 112155223;

//const cliente2 = new Cliente("Alice", 112123223); // criando mais um objeto com base nos moldes da classe
//cliente2.nome = "Alice";
//cliente2.cpf = 112123223;


// criando contas correntes para os clientes
/*const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)


console.log(contaPoupanca);
console.log(contaCorrenteRicardo);

console.log();*/


import { Gerente } from "./Funcionarios/Gerente.js";
//import { Funcionario } from "./Funcionarios/Funcionario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./sistemaAutenticacao.js";

const diretor = new Diretor("Ricardo", 10000, 12345678910)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("André", 5000, 12345678900)
gerente.cadastrarSenha("123")

const cliente = new Cliente("lais", 755156645, "456")

const gerenteestalogado = SistemaAutenticacao.login(gerente, "123");

const diretorestalogado = SistemaAutenticacao.login(diretor, "123456")

const clienteestalogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteestalogado, diretorestalogado, clienteestalogado);

//console.log(clienteestalogado);