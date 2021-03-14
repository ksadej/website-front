import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ProductImg } from 'src/app/Model/ProductImg';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product[] =[]
  productImg: ProductImg[] =[];
  productImgAllList: ProductImg[] =[];
  id: any;
  prodId: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.loadProductById(this.id);
    this.loadImgByProdId(this.id);
  }

  // loadProductById(id){
  //   this.productService.getProductById(this.id).subscribe((data)=>{
  //     this.product = data;
  //   });
  // }

  loadImgByProdId(prodId){
    this.productService.getImgByProductId(prodId).subscribe((data)=>{
      this.productImg = data;
    });
  }

}
