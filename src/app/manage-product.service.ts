import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { productElement } from './admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class manageProductService {

  url:string="https://fakestoreapi.com/products"
  urlcatogry :string = "https://fakestoreapi.com/products/categories"
  
  products!:productElement[] ;
  catogries!:[];
  product!:productElement ;
  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get(this.url).pipe(
      map(response => {
        this.products = response as productElement[];
        return response;
      }))
  };

  getAllcatogries(){
    return this.http.get(this.urlcatogry).pipe(
      map(response => {
        this.catogries = response as [];
        return response;
      }))
  };

  // postproduct(){
  //   return this.http.post(this.url,this.product);
  // }

  // putproduct(){
  //   return this.http.put(this.url + "/" + this.product.id,this.product);
  // } https://fakestoreapi.com/products/6

  delete(id:any){
    return this.http.delete(this.url+"/"+id);
  }

  postproduct(){
    return this.http.post(this.url,this.product);
  }

  putproduct(){
    return this.http.put(this.url + "/" + this.product.id,this.product);
  }

}
