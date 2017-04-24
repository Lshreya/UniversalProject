import { Component, OnInit } from '@angular/core';
import { Http,  } from '@angular/http';
import { ProductGroup } from './ProductGroup';
import { ActivatedRoute } from '@angular/router';
import { ProductGroupFilter } from './productGroupFilter';
import { Product } from './Product';
@Component({
  selector: 'product',
  templateUrl: `./product.html`
})

export class ProductComponent {
  public productGroups:ProductGroup[] = [];
  public id: number;
  public currentProduct: Product;
  

  constructor (private route: ActivatedRoute) {
    route.data.subscribe (
      (data : ProductGroup[]) => {
        this.productGroups = <ProductGroup[]>data['productGroups'];
      }
    );
    this.id = this.route.snapshot.params['id'];
  }
    
      onSelect(product:Product){
       this.currentProduct = product;
      }
      onSelectProductGroup(){
       this.currentProduct = undefined;
      }
}

