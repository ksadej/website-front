import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPassionsComponent } from './admin-dashboard/admin-passions/admin-passions.component';
import { AdminPortfolioComponent } from './admin-dashboard/admin-portfolio/admin-portfolio.component';
import { AdminProductComponent } from './admin-dashboard/admin-product/admin-product.component';
import { ProductAddComponent } from './admin-dashboard/admin-product/product-add/product-add.component';
import { ProductDetailsComponent } from './admin-dashboard/admin-product/product-details/product-details.component';
import { ProductUpdateComponent } from './admin-dashboard/admin-product/product-update/product-update.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/portfolio/details/details.component';
import { ProductListComponent } from './home/portfolio/product-list/product-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent },
  {path: 'product-list/:id', component: ProductListComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent,
  children:[
    {path: 'admin-portfolio', component: AdminPortfolioComponent},
    {path: 'admin-passions', component: AdminPassionsComponent},
    {path: 'admin-product', component: AdminProductComponent},
    {path: 'product-details/:id', component: ProductDetailsComponent},
    {path: 'product-add', component: ProductAddComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'admin-update/:id', component: ProductUpdateComponent},
 // {path: 'product-details/:id', component: ProductDetailsComponent} //działa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
