import { Pipe, PipeTransform } from '@angular/core';
import { Property } from '../models/property';

@Pipe({
  name: 'filterRentBuy'
})
export class FilterRentBuyPipe implements PipeTransform {

  transform(value: Property[], filterNumber: number): Property[] {
    return filterNumber ? value.filter((x:Property) => x.SellRent === filterNumber): value;
  }
}
