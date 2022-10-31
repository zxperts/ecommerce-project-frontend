import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../components/product';

// Import HttpClientModule from @angular/common/http in AppModule
import {HttpClientModule} from '@angular/common/http';
//in place where you wanted to use `HttpClient`
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ProductCategory } from '../common/product-category';



@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // private baseUrl = 'http://localhost:8080/api/products?size=100';
  private baseUrl = 'http://localhost:8080/api/products';
  // private baseUrl = 'https://raw.githubusercontent.com/zxperts/ecommerce-project-frontend/master/src/assets/products.json';
  private categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    // need to build URL based on productId
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]>{

    //need to build the Url base on the category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;


    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductListPaginate(thePage: number,
                        thePageSize: number,
                        theCategoryId: number,): Observable<GetResponseProducts>{

    //need to build the Url base on the category id, page and size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                      +`&page=${thePage}&size=${thePageSize}`;


    return this.httpClient.get<GetResponseProducts>(searchUrl);
    //.pipe(map(response => response._embedded.products))
    ;
  }

  searchProducts(theKeyword: string): Observable<Product[]>{
    // need to build the Url based on the keyword
    const searchUrl  =`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProducts(searchUrl: string): Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductCategories() {
    // throw new Error('Method not implemented.');
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElement: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
