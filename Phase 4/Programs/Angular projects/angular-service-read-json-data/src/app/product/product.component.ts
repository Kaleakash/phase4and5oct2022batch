import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsInfo:Array<Product>=[];
  
  constructor(public ps:ProductService) { }   // DI for ProductService 

  ngOnInit(): void {
  }

  loadProductInfo() : void {
    //this.ps.loadJsonData();
    this.ps.loadJsonData().subscribe({
          next:(data:any)=>this.productsInfo=data.products,
          error:(error:any)=>console.log(error),
          complete:()=>console.log("Done task!")
    });

  }
  
}
