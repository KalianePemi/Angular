import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Kaliane',
    idade: 22,
    altura: 1.49,
    graduado: true
  };

  listaProdutos: any = [ // Este any serve para misturar tipos diferentes, string, numbers, boolean
    {nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31', id: 1}, //Cada um desses objetos podem variar a quantidade de propriedades
    {nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', id: 2, promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 56, validade: '2021-12-28'},
    {precoProduto: 1000, validade: '2021-12-31', id: 4, nome: "Curso de Logica de Programação" }
  ];

  constructor() {
    for (let item of this.listaStrings){
      console.log(item);
    }

    for(const item of this.listaNumeros){
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
    console.log(this.objetoModelo.graduado);

   }

  ngOnInit(): void {
  }

}
