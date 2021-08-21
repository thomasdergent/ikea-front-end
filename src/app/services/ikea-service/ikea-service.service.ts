import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';

@Injectable({
  providedIn: 'root'
})
export class IkeaService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getProductByStoreNameAndArticleNumber(storeName: string, articleNumber: string): Observable<Store>{
    return this.http.get<Store>("http://localhost:8050/store/" + storeName + "/article/" + articleNumber); 
  }

  getProductsByStoreName(storeName: string): Observable<Store>{
    return this.http.get<Store>("http://localhost:8050/products/store/" + storeName); 
  }

  getProductsByStoreNameAndCategory(storeName: string, category: string): Observable<Store>{
    return this.http.get<Store>("http://localhost:8050/store/" + storeName + "/category/" + category); 
  }

  getStores(): Observable<Store[]>{
    return this.http.get<Store[]>("http://localhost:8050/stores"); 
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>("http://localhost:8050/product", product); 
  }

  updateProduct(storeName: string, articleNumber: string, product: Product): Observable<Product>{
    return this.http.put<Product>("http://localhost:8050/store/" + storeName + "/article/" + articleNumber, product); 
  }

  deleteProduct(storeName: string, articleNumber: string): Observable<Product>{
    return this.http.delete<Product>("http://localhost:8050/store/" + storeName + "/article/" + articleNumber); 
  }

}
