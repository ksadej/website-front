import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

    productList: Product[];
    id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loadProductByPortfId(this.id);
  }

  loadProductByPortfId(portfId){
    this.productService.getProductByPortfolioId(portfId).subscribe((data)=>{
      this.productList = data;
    });
  }
  
}
