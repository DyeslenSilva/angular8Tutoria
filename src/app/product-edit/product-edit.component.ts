import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product: any={};
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private ps: ProductsService, private fb: FormBuilder) {
      this.createForm();
     }

     createForm(){
       this.angForm = this.fb.group({
         ProductName: ['',Validators.required],
         ProductDescription: ['',Validators.required],
         ProductPrice: ['', Validators.required]
       });
     }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.ps.editProducts(params['id']).subscribe(res=>{
        this.product = res;
      });
    });
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id){
    this.route.params.subscribe(params =>{
      this.ps.updateproduct(ProductName,ProductDescription, ProductPrice, id);
      this.router.navigate(['products']);
    })
  }
}