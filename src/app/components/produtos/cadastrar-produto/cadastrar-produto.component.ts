import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { IProduto } from 'src/app/model/IProduto.model';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
produto: IProduto = {
  nome: '',
  validade: new Date(),
  precoProduto: 0
};


  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.ProdutosService.cadastrar(this.produto).subscribe(retorno => { //Subscribe serve para a alteração que o Observable viu, ser realizada
      this.produto = retorno;
      this.ProdutosService.exibirMensagem('Sistema',
      `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`, 'toast-success');
    });
  }






}

