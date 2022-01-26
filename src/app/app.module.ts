import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LivrariaAppComponent } from './components/livraria-app/livraria-app.component';
import { FiltersComponent } from './components/livraria-app/filters/filters.component';
import { ProductListComponent } from './components/livraria-app/product-list/product-list.component';
import { ProductItemComponent } from './components/livraria-app/product-list/product-item/product-item.component';
import { ProductListComponentService } from './components/livraria-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LivrariaAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductListComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
