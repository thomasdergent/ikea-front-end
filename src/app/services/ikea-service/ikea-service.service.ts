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

  getProductByArticleNumber(articleNumber: string): Observable<Product>{
    return this.http.get<Product>("http://localhost:8050/product/" + articleNumber); 
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8050/products"); 
  }

  getProductsByCategory(category: string): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8050/products/" + category); 
  }

  getStoreByArticleNumberAndStoreName(articleNumber: string, storeName: string): Observable<Store>{
    return this.http.get<Store>("http://localhost:8050/product/" + articleNumber + "/store/" + storeName); 
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>("http://localhost:8050/product", product); 
  }

  updateProduct(articleNumber: string, product: Product): Observable<Product>{
    return this.http.put<Product>("http://localhost:8050/product/" + articleNumber, product); 
  }

  deleteProduct(articleNumber: string): Observable<Product>{
    return this.http.delete<Product>("http://localhost:8050/product/" + articleNumber); 
  }

  addStore(store: Store): Observable<Store>{
    return this.http.post<Store>("http://localhost:8050/store", store); 
  }

  updateStore(articleNumber: string, storeName: string, store: Store): Observable<Store>{
    return this.http.put<Store>("http://localhost:8050/product/" + articleNumber + "/store/" + storeName, store); 
  }

  deleteStore(articleNumber: string, storeName: string): Observable<Store>{
    return this.http.delete<Store>("http://localhost:8050/product/" + articleNumber + "/store/" + storeName); 
  }
}
