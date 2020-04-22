import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee, TastingRating } from 'src/app/models/coffee';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {

  routingSubscription: any;
  coffee: Coffee;
  tastingEnabled = false;
  types = ['Espresso', 'Ristretto', 'Americano', 'Cappuccino', 'Frappe'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private geolocation: GeolocationService
  ) { }


  ngOnInit(): void {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params.id);
      if (params.id) {
        this.data.get(params.id, response => {
          this.coffee = response;
          if (this.coffee.tastingRating) {
            this.tastingEnabled = true;
          }
        });
      }
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

  save() {
    this.data.save(this.coffee, result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.routingSubscription.unsubscribe();
  }
}
