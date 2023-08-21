import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './app.forecast.component.html',
  styleUrls: ['./app.forecast.css'],
})
export class ForecastComponent {
  constructor(
    weatherService: WeatherService
  ) {
    weatherService.getNextDays('New York').subscribe(res => {
      console.log(res);
    });
  }
}
