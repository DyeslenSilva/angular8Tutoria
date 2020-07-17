import { Component, OnInit } from '@angular/core';
import Product from '../product';
import { ProductsService } from '../products.service';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  angForm: FormGroup;
  
  products: Product[];
  constructor(private ps: ProductsService) {  
    
   }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data: Product[])=>{
      this.products= data;
    });
  }

  
  
  performFilter(filterBy: string): Product[]{
    filterBy =filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
        product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1
)}


    deleteProduct(id){
      this.ps.deleteProduct(id).subscribe(res=>{
        this.products.splice(id,1);
      })
    }

}
