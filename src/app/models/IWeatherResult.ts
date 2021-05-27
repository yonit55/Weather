export interface IWeatherResult {
    weather: IWeather;
    wind: IWind;
    name: string;
}
export interface IWeather {
    description: string;
    icon: string;
    id: number
    main: string;
}
export interface IWind {
    deg: 270
    gust: 0
    speed: 3.13
}