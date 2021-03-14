import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../Model/Portfolio';
import { Product } from '../Model/Product';
import { ProductImg } from '../Model/ProductImg';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products="http://localhost:8080/api/products";
  private productImg="http://localhost:8080/api/Img";
  private portfolio="http://localhost:8080/api/portfolio";


  constructor(private httpClient: HttpClient) { }

  //Portfolio//

  getAllPortfolio(): Observable<Portfolio[]>{
    return this.httpClient.get<Portfolio[]>(`${this.portfolio}`);
  }


  //Product//

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.products}`);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.products}/${id}`);
  }

  getProductByPortfolioId(portfId: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.products}/portfolio/${portfId}`);
  }


  //ProductImg//

  getAllProductImg(): Observable<ProductImg[]>{
    return this.httpClient.get<ProductImg[]>(`${this.productImg}`);
  }
  
  getImgByProductId(prodId: number): Observable<ProductImg[]>{
    return this.httpClient.get<ProductImg[]>(`${this.productImg}/${prodId}`);
  }

}
