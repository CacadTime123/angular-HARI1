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
  i = 0;
  nilai1 = "";
  nilai2 = "";
  operator = "";
  hasil = 0;
  Gambar = [1, 2, 3, 4]

  constructor(private router: Router){

  }

  login(){
    this.router.navigate(['/login']);
  }
  
  detail(){

    if(this.operator == "*"){
      this.hasil = parseInt(this.nilai1) * parseInt(this.nilai2)
      this.router.navigate(['/detail', this.hasil]);
    }
    else if(this.operator == "+"){
      this.hasil = parseInt(this.nilai1) + parseInt(this.nilai2)
      this.router.navigate(['/detail', this.hasil]);
    }
    else{
      this.hasil = parseInt(this.nilai1) - parseInt(this.nilai2)
      this.router.navigate(['/detail', this.hasil]);
    }
  }

  angka1(){
    if(this.i % 2 == 0){
      this.nilai1+="1";
    }
    else{
      this.nilai2 += 1;
    }
  }
  angka2(){
    if(this.i % 2 == 0){
      this.nilai1 += 2;
    }
    else{
      this.nilai2 += 2;
    }
  }
  angka3(){
    if(this.i % 2 == 0){
      this.nilai1 += 3;
    }
    else{
      this.nilai2 += 3;
    }
  }
  angka4(){
    if(this.i % 2 == 0){
      this.nilai1 += 4;
    }
    else{
      this.nilai2 += 4;
    }
  }
  angka5(){
    if(this.i % 2 == 0){
      this.nilai1 += 5;
    }
    else{
      this.nilai2 += 5;
    }
  }
  angka6(){
    if(this.i % 2 == 0){
      this.nilai1 += 6;
    }
    else{
      this.nilai2 += 6;
    }
  }
  angka7(){
    if(this.i % 2 == 0){
      this.nilai1 += 7;
    }
    else{
      this.nilai2 += 7;
    }
  }
  angka8(){
    if(this.i % 2 == 0){
      this.nilai1 += 8;
    }
    else{
      this.nilai2 += 8;
    }
  }
  angka9(){
    if(this.i % 2 == 0){
      this.nilai1 += 9;
    }
    else{
      this.nilai2 += 9;
    }
  }
  angkakali(){
      this.operator = "*";
      this.i++;
  }
  angkakurang(){
   this.operator = "-";
   this.i++;
  }
  angkatambah(){
   this.operator = "+";
   this.i++;
  }
}