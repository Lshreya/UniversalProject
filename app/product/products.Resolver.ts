import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductGroup } from './productGroup';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ProductService }  from './productService';

@Injectable()
export class ProductsResolver implements Resolve<ProductGroup[]> {

    constructor(private service: ProductService) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<ProductGroup[]> {
        return this.service.get();
        
    }

}