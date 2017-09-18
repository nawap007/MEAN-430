import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: any[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((res) => {
      this.products = res;
    });
  }
}
