import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  id: number;
  productUpdate: Product[] =[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  //  this.getProductById(this.id);
  }

  // getProductById(id:number){
  //   this.productService.getProductById(this.id).subscribe((data)=>{
  //     this.productUpdate = data;
  //   });
  // }
}
