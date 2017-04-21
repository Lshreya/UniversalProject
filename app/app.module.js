"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
//import { AppComponent }  from './app.component';
var app_homeComponent_1 = require("./home/app.homeComponent");
var app_routing_module_2 = require("./app-routing.module");
var app_aboutComponent_1 = require("./about/app.aboutComponent");
var product_appComponent_1 = require("./product/product.appComponent");
var project_appComponent_1 = require("./project/project.appComponent");
var contact_appComponent_1 = require("./contact/contact.appComponent");
var customTemplate_appComponent_1 = require("./customTemplate/customTemplate.appComponent");
var productService_1 = require("./product/productService");
var products_Resolver_1 = require("./product/products.Resolver");
var productGroupFilter_1 = require("./product/productGroupFilter");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            app_homeComponent_1.HomeComponent,
            app_routing_module_2.routingComponents,
            app_aboutComponent_1.AboutComponent,
            product_appComponent_1.ProductComponent,
            project_appComponent_1.ProjectComponent,
            contact_appComponent_1.ContactComponent,
            customTemplate_appComponent_1.CustomTemplateComponent,
            productGroupFilter_1.ProductGroupFilter
        ],
        providers: [
            productService_1.ProductService, products_Resolver_1.ProductsResolver
        ],
        bootstrap: [customTemplate_appComponent_1.CustomTemplateComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map