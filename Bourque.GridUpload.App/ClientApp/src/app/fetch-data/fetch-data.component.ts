import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridUploadOptions } from '@bds/grid-upload';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html',
})
@Injectable({
    providedIn: 'root',
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[] = [];

    constructor(http: HttpClient, config: GridUploadOptions) {
        http.get<WeatherForecast[]>(config.gridUploadApiUri + '/weatherforecast').subscribe(
            (result) => {
                console.log(result);
                this.forecasts = result;
            },
            (error) => console.error(error),
        );
    }
}

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
