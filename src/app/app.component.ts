import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mycoffeeapp';

  constructor(private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    if ((<any>navigator).standalone === false) {
      // this is an ios device and we are in the browswer
      this.snackBar.open('You can add this snack bar to HomeScreen',
        '',
        {
          duration: 3000
        }
      );
    }

    if ((<any>navigator).standalone === undefined) {
      // Its not IOS
      if (window.matchMedia('(display-mode: browser').matches) {
        //  We are in the browser
        window.addEventListener('beforeinstallprompt', event => {
          event.preventDefault();
          const sb = this.snackBar.open('Do You want to install this app?', 'install', {
            duration: 5000
          });
          sb.onAction().subscribe(() => {
            (<any>event).prompt();
            (<any>event).userChoice.then(result => {
              if (result.outcome === 'dismissed') {
                // TRACK:   Track no installation
              } else {
                // TODO: Track it was installed
              }
            });
          });
          return false;
        });
      }
    }

  }
}
