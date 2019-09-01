import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from './current-weather.interface'
import { CurrentWeatherService } from './current-weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  providers: [CurrentWeatherService]
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private service: CurrentWeatherService) {}

  ngOnInit() {
    this.service.fetchWeather('Auckland', 'NZ').subscribe(
      (data) => {
        this.current = data
      }
    )
  }
}
