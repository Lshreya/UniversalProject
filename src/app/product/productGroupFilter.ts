import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { ProductGroup } from './ProductGroup';

@Pipe({
  name: 'productGroupFilter'
})
@Injectable()
export class ProductGroupFilter implements PipeTransform {
  transform(productGroups: ProductGroup[], args: any[]): any {
    return productGroups.filter(productGroup => productGroup.id === args[0]);
  }
}