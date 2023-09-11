import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastResponse } from './models/forecast-response.model';
import { WeatherResponse } from './models/location-response.model';

@Injectable()
export class WeatherService {
  private baseUrl: string;
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/';
    this.apiKey = '5a4b2d457ecbef9eb2a71e480b947604';
  }

  getNextDays(zipCode: number): Observable<ForecastResponse> {
    const params = {
      zip: `${zipCode}`,
      cnt: '5',
      units: 'imperial',
      APPID: `${this.apiKey}`,
    };
    const queryParams = new URLSearchParams(params);
    return this.http.get<ForecastResponse>(
      `${this.baseUrl}/forecast/daily?${queryParams}`
    );
  }

  getForecast(zipCode: number): Observable<WeatherResponse> {
    const params = {
      zip: `${zipCode}`,
      units: 'imperial',
      APPID: `${this.apiKey}`,
    };
    const queryParams = new URLSearchParams(params);
    return this.http.get<WeatherResponse>(
      `${this.baseUrl}/weather?${queryParams}`
    );
  }
}
