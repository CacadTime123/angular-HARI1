import { Component } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router){

  }

  login(){
    this.router.navigate(['/login']);
  }
  
  detail(){
    this.router.navigate(['/detail', 4]);
  }
}