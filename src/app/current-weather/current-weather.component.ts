import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from './current-weather.interface'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    // NOTE: test data for the view
    this.current = {
      city: 'Wellington',
      country: 'NZ',
      date: 1567289511,
      image: 'assets/images/sunny.svg',
      temperature: 21,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit() {}
}
