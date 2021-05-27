import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { IWeatherResult } from 'src/app/models/IWeatherResult';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.scss']
})
export class WeatherResultsComponent implements OnInit {
  @Input() item: IWeatherResult;
  @Input() isAllResult= false
  constructor(public weatherSvc: WeatherService) { }

  ngOnInit(): void {

  }
}
