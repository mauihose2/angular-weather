import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ICurrentWeather } from './current-weather.interface'

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(
    private httpClient: HttpClient
  ) {}

  fetchWeather(city: string, country: string): Observable<ICurrentWeather> {
    const url = `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
    return this.httpClient.get<ICurrentWeather>(url).pipe(
      map(
        apiData => {
          const model : ICurrentWeather = {
            city: apiData['name'],
            country: apiData['sys']['country'],
            date: apiData['dt'] * 1000,
            image: `${environment.baseUrl}openweathermap.org/img/w/${apiData['weather'][0]['icon']}.png`,
            tempCelsius: apiData['main']['temp'] - 273.15,
            tempFahrenheit: apiData['main']['temp'] * 9 / 5 - 459.67,
            description: apiData['weather'][0]['description']
          }
          return model;
        }
      )
    )
  }
}
