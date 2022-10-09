import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.listProducts()
  }

  listProducts(){
    this.ProductService.getProductList().subscribe(
      data =>{
        this.products=data
      }
    )
  }

}
