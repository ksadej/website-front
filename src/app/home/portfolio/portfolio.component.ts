import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Portfolio } from 'src/app/Model/Portfolio';
import { ProductService } from 'src/app/Service/product.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioList: Portfolio[];

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }
    display: boolean = true;
    id:any;

  ngOnInit(): void {
    this.loadPortfolio();
  }

  getPortfolioId(id: number){
    this.router.navigate(['home','product-list', id]);
  }
  
  onPress() {
    this.display = !this.display;
  }

  loadPortfolio(){
    this.productService.getAllPortfolio().subscribe((data)=>{
      this.portfolioList = data;
    });
  }

}
