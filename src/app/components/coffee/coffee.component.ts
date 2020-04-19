import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee, TastingRating } from 'src/app/models/coffee';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {

  routingSubscription: any;
  coffee: Coffee;
  types = ['Espresso', 'Ristretto', 'Americano', 'Cappuccino', 'Frappe'];

  constructor(private route: ActivatedRoute, private geolocation: GeolocationService) { }


  ngOnInit(): void {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params.id);
    });

    this.geolocation.requestLocation(location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    });

  }

  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }

  ngOnDestroy(): void {
    this.routingSubscription.unsubscribe();
  }
}
