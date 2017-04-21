"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(route) {
        var _this = this;
        this.route = route;
        this.productGroups = [];
        route.data.subscribe(function (data) {
            _this.productGroups = data['productGroups'];
        });
        this.id = this.route.snapshot.params['id'];
    }
    ProductComponent.prototype.onSelect = function (product) {
        this.currentProduct = product;
    };
    ProductComponent.prototype.onSelectProductGroup = function () {
        this.currentProduct = undefined;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: "./product.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.appComponent.js.map