"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_homeComponent_1 = require("./home/app.homeComponent");
var app_aboutComponent_1 = require("./about/app.aboutComponent");
var product_appComponent_1 = require("./product/product.appComponent");
var project_appComponent_1 = require("./project/project.appComponent");
var contact_appComponent_1 = require("./contact/contact.appComponent");
var safety_appComponent_1 = require("./safety/safety.appComponent");
var productGroup_appComponent_1 = require("./product/productGroup.appComponent");
var customTemplate_appComponent_1 = require("./customTemplate/customTemplate.appComponent");
var products_Resolver_1 = require("./product/products.Resolver");
var disclaimer_appComponent_1 = require("./disclaimer/disclaimer.appComponent");
var routes = [
    { path: '', component: app_homeComponent_1.HomeComponent },
    { path: 'about', component: app_aboutComponent_1.AboutComponent },
    { path: 'project', component: project_appComponent_1.ProjectComponent },
    { path: 'product/:id', component: product_appComponent_1.ProductComponent, resolve: { productGroups: products_Resolver_1.ProductsResolver } },
    { path: 'contact', component: contact_appComponent_1.ContactComponent },
    { path: 'contact', component: contact_appComponent_1.ContactComponent },
    { path: 'safety', component: safety_appComponent_1.SafetyComponent },
    { path: 'productGroup', component: productGroup_appComponent_1.ProductGroupComponent, resolve: { productGroups: products_Resolver_1.ProductsResolver } },
    { path: 'disclaimer', component: disclaimer_appComponent_1.DisclaimerComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [app_homeComponent_1.HomeComponent,
    app_aboutComponent_1.AboutComponent,
    project_appComponent_1.ProjectComponent,
    product_appComponent_1.ProductComponent,
    contact_appComponent_1.ContactComponent,
    customTemplate_appComponent_1.CustomTemplateComponent,
    productGroup_appComponent_1.ProductGroupComponent,
    safety_appComponent_1.SafetyComponent,
    disclaimer_appComponent_1.DisclaimerComponent
];
//# sourceMappingURL=app-routing.module.js.map