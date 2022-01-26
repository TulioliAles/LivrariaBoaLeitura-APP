import { Component, OnInit } from '@angular/core';
import { ProductListComponentService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any

  livroService: ProductListComponentService

  constructor(livroService: ProductListComponentService) {

    this.livroService = livroService

   }

  ngOnInit(): void {

    this.livros = this.livroService.getLivro().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
