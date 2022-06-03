import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4200/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice){
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`,obj)
      .subscribe(res=> console.log('Done'));
  }

  getProducts(){
    return this.http.get(`${this.uri}`);
  }

  editProducts(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateproduct(ProductName, ProductDescription, ProductPrice, id){
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this.http.post(`${this.updateproduct}/update/${id}`,obj)
    .subscribe(res => console.log('Done'));
  }
  
  deleteProduct(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}