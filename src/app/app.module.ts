import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { AppRoutingModule } from './app-routing.module';
import { ForecastComponent } from './forecast/app.forecast.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ForecastComponent,
    LandingPageComponent
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
