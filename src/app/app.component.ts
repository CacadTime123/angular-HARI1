import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  a = 0;
  b = 0;
  i = 0
  Gambar = [1, 2, 3, 4]

  KlikButton()
  {
    for (this.i = 0; this.i < this.a; this.i++){

    }
    this.Gambar = new String[this.a];
  }
}
