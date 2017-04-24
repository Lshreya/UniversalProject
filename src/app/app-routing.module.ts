import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/app.homeComponent';
import { AboutComponent }  from './about/app.aboutComponent';
import {ProductComponent} from './product/product.appComponent';
import {ProjectComponent} from './project/project.appComponent';
import {ContactComponent} from './contact/contact.appComponent';
import {SafetyComponent} from './safety/safety.appComponent';
import {ProductGroupComponent} from './product/productGroup.appComponent';
import { CustomTemplateComponent } from './customTemplate/customTemplate.appComponent';
import { ProductsResolver } from './product/products.Resolver';
import {DisclaimerComponent} from './disclaimer/disclaimer.appComponent';
const routes: Routes=[
    {path:'', component: HomeComponent },
     {path:'about', component: AboutComponent},
     {path:'project', component: ProjectComponent},
     {path:'product/:id', component: ProductComponent, resolve: { productGroups: ProductsResolver } },
     {path:'contact', component: ContactComponent},
     {path:'contact', component: ContactComponent},
     {path:'safety', component: SafetyComponent},
      {path:'productGroup', component: ProductGroupComponent, resolve: { productGroups: ProductsResolver }},
    {path:'disclaimer', component: DisclaimerComponent}
  
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                AboutComponent,
                                ProjectComponent,
                                 ProductComponent,
                                 ContactComponent,
                                 CustomTemplateComponent,
                                 ProductGroupComponent,
                                 SafetyComponent,
                                 DisclaimerComponent
                                 
                                  ]
