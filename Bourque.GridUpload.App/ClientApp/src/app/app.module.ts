import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizeModule, AuthorizeOptions } from '@bds/auth';
import { BdsUiModule, BdsUiSidebarModule } from '@bds/ui';
import { BDSINTERNAL_API_BASE_URL } from '@bds/internal-api';
import { THIS_APPLICATION_CODE, THIS_APPLICATION_NAME } from '@bds/core';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { GridUploadModule, GridUploadOptions } from '@bds/grid-upload';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        AuthorizeModule,
        BdsUiModule,
        BdsUiSidebarModule,
        BrowserAnimationsModule,
        GridUploadModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [
        { provide: BDSINTERNAL_API_BASE_URL, useValue: environment.bdsInternalApiUri },
        { provide: THIS_APPLICATION_CODE, useValue: 'BI' },
        { provide: THIS_APPLICATION_NAME, useValue: 'ShipperBI' },
        {
            provide: AuthorizeOptions,
            useValue: environment.authOptions,
        },
        {
            provide: GridUploadOptions,
            useValue: environment.gridUploadOptions,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
