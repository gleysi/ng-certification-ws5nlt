import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  zipcodesArray = [];

  constructor(private weatherService: WeatherService) {}

  storeZipCode(zipcode) {
    console.log(zipcode);
    this.zipcodesArray.push(zipcode);
    localStorage.setItem('zipCodesEntered', JSON.stringify(this.zipcodesArray));

    const getZipCodesStored = localStorage.getItem('zipCodesEntered');
    console.log('getZipCodesStored', getZipCodesStored);

    this.weatherService.getForecast(zipcode).subscribe((data) => {
      console.log(data);
    });
  }
}
