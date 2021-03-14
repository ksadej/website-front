import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-watchstraps',
  templateUrl: './watchstraps.component.html',
  styleUrls: ['./watchstraps.component.css']
})
export class WatchstrapsComponent implements OnInit {

  productList: Product[] =[]

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  productDetails(id:number){
    this.router.navigate(['details', id]);
  }

  loadProducts(){
    this.productService.getAllProducts().subscribe((products)=>{
      this.productList = products;
    });
  }

}
