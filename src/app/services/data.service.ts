import { Injectable } from '@angular/core';
import { Coffee, PlaceLocation } from '../models/coffee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public endpoint = 'http://localhost:3000';

  getList(callback) {
    const list = [
      new Coffee('Double Espresso', 'Sunny Cafe', new PlaceLocation('123 MArket St', 'San Franciso')),
      new Coffee('Caramel Americano', 'Starcoffee', new PlaceLocation('Gran Via 34', 'Madrid'))
    ];
    callback(list);
    this.http.get(`${this.endpoint}/coffees`).subscribe(response => {
      console.log('server response', response);
      callback(response);
    });
  }

  save(coffee, callback) {
    if (coffee._id) {
      // its an update

      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // its an insert
      this.http.post(`${this.endpoint}/coffees`, coffee)
        .subscribe(response => {
          callback(true);
        });
    }
    callback(true);
  }

  get(coffeeId: string, callback) {
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`)
      .subscribe(response => {
        callback(response);
      });
  }
}
