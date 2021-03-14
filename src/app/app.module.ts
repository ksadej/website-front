import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NavComponent } from './home/nav/nav.component';
import { PassionComponent } from './home/passion/passion.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchstrapsComponent } from './home/portfolio/watchstraps/watchstraps.component';
import { DetailsComponent } from './home/portfolio/details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WatchstrapsListComponent } from './home/portfolio/watchstraps-list/watchstraps-list.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { BeltsListComponent } from './home/portfolio/belts-list/belts-list.component';
import { ProductListComponent } from './home/portfolio/product-list/product-list.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from './admin-dashboard/sidenav/sidenav.component';
import { AdminNavComponent } from './admin-dashboard/admin-nav/admin-nav.component';
import { AdminPortfolioComponent } from './admin-dashboard/admin-portfolio/admin-portfolio.component';
import { AdminPassionsComponent } from './admin-dashboard/admin-passions/admin-passions.component';
import { AdminProductComponent } from './admin-dashboard/admin-product/admin-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductUpdateComponent } from './admin-dashboard/admin-product/product-update/product-update.component';
import { ProductDetailsComponent } from './admin-dashboard/admin-product/product-details/product-details.component';
import { ProductAddComponent } from './admin-dashboard/admin-product/product-add/product-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    PassionComponent,
    PortfolioComponent,
    WatchstrapsComponent,
    DetailsComponent,
    WatchstrapsListComponent,
    ArticlesComponent,
    BeltsListComponent,
    ProductListComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    AdminDashboardComponent,
    SidenavComponent,
    AdminNavComponent,
    AdminPassionsComponent,
    AdminPortfolioComponent,
    AdminProductComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
