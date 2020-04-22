import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Coffee } from 'src/app/models/coffee';
import { Router } from '@angular/router';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: [Coffee];

  constructor(
    private data: DataService,
    private geolocation: GeolocationService,
    private router: Router) { }

  ngOnInit(): void {
    this.data.getList(list => {
      this.list = list;
    });
  }

  goDetails(coffee: Coffee) {
    this.router.navigate(['/coffee', coffee._id]);
  }

  goMap(coffee: Coffee) {
    const mapURL = this.geolocation.getMapLink(coffee.location);
    location.href = mapURL;
  }

  share(coffee: Coffee) {
    const shareText = `I had this coffee at ${coffee.place} and for me its a ${coffee.rating} star`;
    if ('share' in navigator) {
      (<any>navigator).share({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then(() => {
        return console.log('shared');
      }).catch(() => {
        return console.log('error sharing');

      });
    } else {
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL;
    }
  }

}
