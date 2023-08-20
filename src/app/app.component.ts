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
  weatherDisplay = {};
  imageUrl = "https://www.angulartraining.com/images/weather/clouds.png";

  constructor(private weatherService: WeatherService) {}

  storeZipCode(zipcode) {
    console.log(zipcode);

    this.zipcodesArray.push(zipcode);

    localStorage.setItem('zipCodesEntered', JSON.stringify(this.zipcodesArray));

    const getZipCodesStored = localStorage.getItem('zipCodesEntered');
    console.log('getZipCodesStored', getZipCodesStored);

    this.getWeatherLocation(zipcode);
  }

  async getWeatherLocation(zipcode: string) {
    this.weatherService.getForecast(zipcode).subscribe((data) => {
      this.weatherDisplay = data;
      console.log(data);
    });
    // try {
    //   const res = await this.weatherService.getWeather(zipcode);
    //   console.log('res',res);
    // } catch (error) {
    //   console.log('No Zipcode found');
    // }
  }
}
