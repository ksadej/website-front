import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  product: Product[] =[];

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.product = data;
    });
  }

  updateProduct(id:number){
    this.router.navigate(['product-update', id]);
  }

  detailsProduct(id:number){
    this.router.navigate(['/admin-dashboard','product-details', id]);
  }

}
