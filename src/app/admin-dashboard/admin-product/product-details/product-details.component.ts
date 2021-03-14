import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ProductImg } from 'src/app/Model/ProductImg';
import { ProductService } from 'src/app/Service/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

    id: number;
    productDetails: Product;
    productImg: ProductImg[] =[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.getProductDetails(this.id);
    this.productService.getProductById(this.id).subscribe((data) =>{
      this.productDetails = data;
      console.log(data);
    });
    this.loadImgByProdId(this.id);
  }

  loadImgByProdId(prodId){
    this.productService.getImgByProductId(prodId).subscribe((data)=>{
      this.productImg = data;
    });
  }

  // getProductDetails(id):void{
  //   this.productService.getProductById(id).subscribe((data) =>{
  //     this.productDetails = data;
  //   });
  // }

}
