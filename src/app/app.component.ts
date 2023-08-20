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
  weatherDisplay;
  weatherDisplayArray: any;
  storedZipcodeEntered;
  imagePath = 'https://www.angulartraining.com/images/weather/';

  constructor(private weatherService: WeatherService) {}

  storeZipCode(zipcode: string): void {
    this.getWeatherLocation(zipcode);
  }

  async getWeatherLocation(zipcode: string): Promise<any> {
    this.weatherService.getForecast(zipcode).subscribe((data) => {
      data.zipcode = zipcode;
      data.imageUrl =
        this.imagePath + data.weather[0].main.toLowerCase() + '.png';
      this.weatherDisplay = data;
      this.storageItems(this.weatherDisplay);
    });
  }

  storageItems(weatherEntered: object): void {
    this.zipcodesArray.push(weatherEntered);

    localStorage.setItem('zipCodesEntered', JSON.stringify(this.zipcodesArray));

    this.storedZipcodeEntered = JSON.parse(
      localStorage.getItem('zipCodesEntered')
    );
    console.log('this.storedZipcodeEntered', this.storedZipcodeEntered);
  }
}
