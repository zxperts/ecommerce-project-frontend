import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  theProductId: number;
  constructor( private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    }
    )
  }
  handleProductDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log('PMU',this.route.snapshot.paramMap.get('id'));

    this.productService.getProduct(theProductId).subscribe(
      data=>{
        this.product=data;
      }
    )


    //check if id param is available
    // const hasProductId: boolean = this.route.snapshot.paramMap.has('id');
        
    // if(hasProductId) {
    //   //get the id param string convert string to a number using  the "+" symbol
    //   this.theProductId = Number(this.route.snapshot.paramMap.get('id')); 
    // }
    // else {
    //   this.theProductId=1;
    // }

    // console.log('PMU',this.route.snapshot.paramMap.get('id'));

    // //now get the products for the given Product id
    // this.productService.getProduct(this.theProductId).subscribe(
    //   data =>{this.product=data;}
    //   )




  }

}
