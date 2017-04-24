import { Component, OnInit } from '@angular/core';
import { Http,  } from '@angular/http';
import { ProductGroup } from './ProductGroup';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'productGroup',
  templateUrl: `./productGroup.html`
})

export class ProductGroupComponent {
  data:ProductGroup[] = [];

  constructor (private route: ActivatedRoute, private router: Router) {
    route.data.subscribe (
      (data : ProductGroup[]) => {
        this.data = <ProductGroup[]>data['productGroups'];
      }
    );
  }

      onSelect(productGroup:ProductGroup){
        this.router.navigate(['/product', productGroup.id]);
      }
}

