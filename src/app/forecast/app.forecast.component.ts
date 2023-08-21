import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './app.forecast.component.html',
  styleUrls: ['./app.forecast.css'],
})
export class ForecastComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private weatherServiceSubscription: Subscription;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      console.log(params);
      if (params && params['id']) {
        this.weatherServiceSubscription = this.weatherService
          .getNextDays(params['id'])
          .subscribe((res) => {
            console.log(res);
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.weatherServiceSubscription.unsubscribe();
  }
}
