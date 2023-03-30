import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<product> = [
    
    {
      imagem: "https://i.zst.com.br/thumbs/12/38/2f/-785373785.jpg",
      descricao: "Iphone XR branco 64gb",
      valor: 3000,
      estoque: 10,
      promocao: false
    },

    {
      imagem: "https://http2.mlstatic.com/D_NQ_NP_971595-MLA43711395877_102020-O.jpg",
      descricao: "Iphone 8 plus branco 256gb",
      valor: 2200,
      estoque: 10,
      promocao: false
    },

    {
      imagem: "https://i.zst.com.br/thumbs/12/6/1d/-789629136.jpg",
      descricao: "Iphone 11 lilás 64gb",
      valor: 2900,
      estoque: 0,
      promocao: true
      
    },
    
    {
      imagem: "https://i.zst.com.br/thumbs/12/3b/1c/-932903601.jpg",
      descricao: "Iphone 12 64gb",
      valor: 3200,
      estoque: 10,
      promocao: true
    },
    {
    imagem: "https://planoscelular.claro.com.br/medias/18247-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2NDI3MXxpbWFnZS9wbmd8aGMwL2hhNi85MzIwNDc3MzI3MzkwLzE4MjQ3XzBfemVyb18zMDBXeDMwMEhfcHJvZHVjdENhcmR8NzRmZDNmMzg1MzE0ZTRlMWI5YzlhNGMyMmUyMGZkNDczNmI1NmM4MmE4OTkxNWI2OTJjZTE1YzU3MGIyN2ZjYQ",
    descricao: "Iphone 13 preto 128gb",
    valor: 4200,
    estoque: 10,
    promocao: false
  
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
