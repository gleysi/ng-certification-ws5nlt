import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  apiKey = '5a4b2d457ecbef9eb2a71e480b947604';

  private url = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {}

  getNextDays(zipCode: string): Observable<any> {
    return this.http.get<any>(
      this.url +
        'forecast/daily?zip=' +
        zipCode +
        '&cnt=5&units=imperial&APPID=' +
        this.apiKey
    );
  }

  // Observable
  getForecast(zipCode: string): Observable<any> {
    return this.http.get<any>(
      this.url +
        'weather?zip=' +
        zipCode +
        '&units=imperial&APPID=' +
        this.apiKey
    );
  }

  // Promise
  async getWeather(zipCode: string): Promise<any> {
    try {
      const response = await this.http.get(
        this.url +
          'weather?zip=' +
          zipCode +
          '&units=imperial&APPID=' +
          this.apiKey,
        {}
      );

      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
    }
  }
}
