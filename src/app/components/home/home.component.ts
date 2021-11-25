import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção`; //template string forma diferente de concatenaçao
  precoProduto: number = 2.51;
  idProduto: number = 3;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade: string = '2021-12-31';
  listagemProdutos: any [] = [
    {nome: 'Curso de Lógica de Programação ', precoProduto: 100.00, validade: '2021-12-31 ', id: 2},
    {nome: 'Curso de CSharp ', precoProduto: 250.00, validade: '2021-12-31 ', id: 3},
    {nome: 'Curso de Android ', precoProduto: 300.00, validade: '2021-12-31 ', id: 4},
    {nome: 'Curso de Banco de Dados ', precoProduto: 180.00, validade: '2021-12-31 ', id: 5},
    {nome: 'Curso de Metodolgias Ágeis ', precoProduto: 500.00, validade: '2021-12-31 ', id: 6},
  ];

  constructor() {
    //variaveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção!'
    console.log('Nome do Produto', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção ', this.promocao);
    console.log('ID do Produto ', this.idProduto);


    // let idade = 10; //nao deixa a gnte mudar a variavel dentro de um mesmo contexto
    // console.log ('Minha idade é ', idade);

    // var idade = 20;
    // console.log ('Minha idade é ', idade);


    // let idade = 20; //Opcao let é mais restritivo, não permite que confunda a palavra idade.
    // function imprimeIdade(){
    //   for(let idade = 30; idade <= 40; idade++){
    //     console.log ('Idade dentro do for: ', idade);
    //   }

    //   console.log('idade fora do for ', idade);
    // }
    // imprimeIdade();

    // const var2 = 1; //toda constante precisa ser inicilizada


    //1) O sistema imprime na tela seguindo a ordem do código, por isso precisamos
    //de um console.log para cada variavel
    // var variavel = 0;
    // console.log('variavel', variavel);
    // var variavel = 10;
    // console.log('variavel', variavel);
    //1) Mesmo exemplo acima, só que usando uma funcão
    // function funcao(){
    //   var outra_variavel = 20;
    //   console.log('outra variavel:', outra_variavel);
    //   var outra_variavel = 30;
    //   console.log('outra variavel:', outra_variavel);
    // }
    // funcao();
    //2) Nao é possivel trocar var pelo let, pois estao no mesmo contexto
    // Neste caso as variaveis precisam ter nomes diferentes:

    //3)
    // var a = 10;
    // var b = 20;
    // function bar() {
    //   var a = 30;
    //   let b = 40;
    //   if (true) {
    //     var a = 50;
    //     let b = 60;
    //     console.log('variavel a dentro do if', a);//Resultado 50
    //     console.log('Variavel b dentro do if',b); //Resultado 60
    //   }
    //   console.log('variavel a dentro da funcao', a); //Resultado 50
    //   console.log('Variavel b dentro da funcao,', b); //Resultado 40 Aqui ele enxerga o let como valor mais
    //   //importante do que o valor que está no bloco do if
    // }
    // bar();
    // console.log('Variavel a fora da funcao', a);//Imprimiu 10, pois primeiro faz a verificacao dentro
    // // da funcao e depois as variaveis "soltas" prevalencendo o ultimo numero que está nelas
    // console.log('Variavel b fora da funcao', b);//Imprimiu 20

    //4)
    // let a = 1;
    // function bar(){
    //   console.log('variavel a: ', a); //1
    //   let b = 2;
    //   if(true){
    //     let c = 3;
    //     let a = 4;
    //     console.log('variavel a dentro do if: ', a); //Imprimiu 4, considerou o let de dentro da funcao
    // mais importante
    //     console.log('variavel b dentro do if: ', b); //2 Ele usa o valor que está em let
    //     console.log('variavel c dentro do if: ', c); //Imprimiu 3
    //   }
    //   console.log ('variavel a fora do if: ', a); //1 Usa o valor de let, acima do bloco
    //   console.log('Variavel b fora do if: ', b); //2 Usou o valor de let fora do if
    //   //console.log(c); // Apresenta um erro, o sistema nao encontra, pois ela só foi mencionada
    //   //dentro do if
    // }
    // bar();

    //5)
    // var a = 5;
    // var b = 10;
    // if (a = 5){
    //   let a = 4;
    //   var b = 1;
    //   console.log('variavel a dentro do if:', a);//Aqui imprimiu 4 pq let está dentro do if, do mesmo contexto
    //   //
    //   console.log('variavel b dentro do if: ', b);// 1 pois considera o bloco
    // }
    // console.log('variavel a fora do if: ', a); //5
    // console.log('variavel b fora do if: ', b); //imprimiu 1, pois o que esta dentro do if subscreveu o de fora

   }

  ngOnInit(): void {
  }

}
