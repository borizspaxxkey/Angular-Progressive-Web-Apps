import { Injectable } from '@angular/core';
import { Coffee, PlaceLocation } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback) {
    const list = [
      new Coffee('Double Espresso', 'Sunny Cafe', new PlaceLocation('123 MArket St', 'San Franciso')),
      new Coffee('Caramel Americano', 'Starcoffee', new PlaceLocation('Gran Via 34', 'Madrid'))
    ];
    callback(list);
  }

  save(coffee, callback) {
    callback(true);
  }
}
