import { Component } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
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
      const image =
        data.weather[0].main === 'Clear' ? 'clouds' : data.weather[0].main;
      data.imageUrl = this.imagePath + image.toLowerCase() + '.png';
      data.link = '/forecast/' + data.zipcode;
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

  removeItem(item: string): void {
    const removeItem = this.storedZipcodeEntered.indexOf(item);
    this.storedZipcodeEntered = this.storedZipcodeEntered.filter(
      (item, key) => key !== removeItem
    );
    localStorage.setItem(
      'zipCodesEntered',
      JSON.stringify(this.storedZipcodeEntered)
    );
  }
}
