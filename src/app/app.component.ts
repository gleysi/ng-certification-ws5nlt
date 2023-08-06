import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  zipcodesArray = [];

  storeZipCode(zipcode) {
    console.log(zipcode);
    this.zipcodesArray.push(zipcode);
    // console.log(this.zipcodesArray);
    localStorage.setItem('zipCodesEntered', JSON.stringify(this.zipcodesArray));

    const getZipCodesStored = localStorage.getItem('zipCodesEntered');
    console.log('getZipCodesStored', getZipCodesStored);
  }
}
