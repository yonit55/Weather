import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { IWeatherResult } from 'src/app/models/IWeatherResult';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherResult: Array<IWeatherResult> = [];
  items: FormArray;
  weatherForm: FormGroup;
  cities = ['kyiv', 'Tel Aviv'];

  constructor(public weatherSvc: WeatherService, public fb: FormBuilder) {
    this.setFormGroup();
  }
  addCity(item): void {
    this.searchWeather(item.value.city, item.value.units);
  }
  ngOnInit(): void {
    this.items = this.weatherForm.get('items') as FormArray;
    console.log(this.weatherForm);
  }
  searchWeather(loc: string, units: string) {
    this.weatherForm.markAllAsTouched();
    if (!this.weatherForm.valid) {
      return;
    }
    this.weatherSvc.getCurrentWeather(loc, units)
      .subscribe((res: IWeatherResult) => {
        this.saveWeather(res);
      });
  }
  setFormGroup() {
    this.weatherForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }
  addItem(): void {
    this.items.push(this.createItem());
  }
  createItem(): FormGroup {
    return this.fb.group({
      city: ['', Validators.required],
      units: ['', Validators.required],
    });
  }
  saveWeather(item): void {
    this.weatherResult.push(item);
    this.addItem();
  }

}
