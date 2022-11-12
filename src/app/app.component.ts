import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ing-web-ii-act-2';
  celsius: number = 0;
  fahrenheit: number = 0;

  ngOnInit() {
    this.getFahrenheit();
  }

  getFahrenheit() {
    console.log(`Grados celsius ${this.celsius}`);
    this.fahrenheit = (this.celsius*(9/5))+32;
  }

}
