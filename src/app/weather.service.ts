import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  apiKey = '5a4b2d457ecbef9eb2a71e480b947604';

  private url =
    'https://api.openweathermap.org/data/2.5/weather?zip=10001&units=imperial&APPID=' +
    this.apiKey;

  constructor(
    private http: HttpClient
  ) {
  }

  getForecast(zipCode: string): Observable<any> {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&units=imperial&APPID=' +
    this.apiKey);
  }
}