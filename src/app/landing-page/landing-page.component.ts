import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  storedZipcodeEntered;
  private subscription: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getItems();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async getWeatherLocation(zipcode: string): Promise<any> {
    this.subscription = this.weatherService
      .getForecast(zipcode)
      .subscribe((data) => {
        data.zipcode = zipcode;
        const image =
          data.weather[0].main === 'Clear' ? 'clouds' : data.weather[0].main;
        data.imageUrl =
          'https://www.angulartraining.com/images/weather/' +
          image.toLowerCase() +
          '.png';
        data.link = '/forecast/' + data.zipcode;
        this.addItem(data);
      });
  }

  getItems(): void {
    this.storedZipcodeEntered = JSON.parse(
      localStorage.getItem('zipCodesEntered')
    );
  }

  addItem(weatherEntered: object): void {
    this.storedZipcodeEntered.push(weatherEntered);
    localStorage.setItem(
      'zipCodesEntered',
      JSON.stringify(this.storedZipcodeEntered)
    );
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
