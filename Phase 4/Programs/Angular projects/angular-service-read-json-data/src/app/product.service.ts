import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'      // it is equal to provider attribute in app.module.ts file 
})
export class ProductService {

  constructor(public http:HttpClient) { }   // DI for HttpClient API.


  // loadJsonData() : void {
  //   this.http.get("./assets/products.json").subscribe({
  //     next:(data:any)=>console.log(data),
  //     error:(error:any)=>console.log(error),
  //     complete:()=>console.log("Done task!")
  //   });
    
  // }
  // return Observable with type casting for array of product 
  loadJsonData() : Observable<Product[]> {
      return this.http.get<Product[]>("./assets/products.json");
  }
}
