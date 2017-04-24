import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/app.homeComponent';
import {routingComponents} from './app-routing.module'
import { AboutComponent }  from './about/app.aboutComponent'
import { ProductComponent }  from './product/product.appComponent';
import { ProjectComponent }  from './project/project.appComponent';
import { ContactComponent }  from './contact/contact.appComponent';
import { CustomTemplateComponent } from './customTemplate/customTemplate.appComponent';
import { ProductService }  from './product/productService';
import { ProductsResolver } from './product/products.Resolver';
import { ProductGroupFilter } from './product/productGroupFilter';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ 
    HomeComponent,
    routingComponents,
    AboutComponent,
    ProductComponent,
    ProjectComponent,
    ContactComponent,
    CustomTemplateComponent,
    ProductGroupFilter
  ],
  providers: [
    ProductService, ProductsResolver
  ],
  bootstrap: [ CustomTemplateComponent]
})
export class AppModule { }
