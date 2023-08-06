import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  zipcodesArray = [];
  apiKey = '5a4b2d457ecbef9eb2a71e480b947604';

  private url =
    'https://api.openweathermap.org/data/2.5/weather?zip=10001&units=imperial&APPID=' +
    this.apiKey;

  constructor(private http: HttpClient) {}

  storeZipCode(zipcode) {
    console.log(zipcode);
    this.zipcodesArray.push(zipcode);
    localStorage.setItem('zipCodesEntered', JSON.stringify(this.zipcodesArray));

    const getZipCodesStored = localStorage.getItem('zipCodesEntered');
    console.log('getZipCodesStored', getZipCodesStored);

    this.getForecast().subscribe((data) => {
      console.log(data);
    });
  }

  // TODO: Change this to a service
  getForecast(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
