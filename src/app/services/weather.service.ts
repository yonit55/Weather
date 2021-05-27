import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { IWeatherResult } from '../models/IWeatherResult';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
 
  constructor(private http: HttpClient) {
  }
 
  getCurrentWeather(loc: string, units: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&units=${units}&appid=${environment.apiKey}`)
  }

}

