import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { AuthorizeModule, AuthorizeOptions } from '@bds/auth';
import {BdsUiModule, BdsUiSidebarModule} from "@bds/ui";
import { BDSINTERNAL_API_BASE_URL } from '@bds/internal-api';
import { THIS_APPLICATION_CODE, THIS_APPLICATION_NAME } from '@bds/core';
import {MatMenuModule} from "@angular/material/menu";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {BdsSwitchboardModule} from "@bds/application-pathing";
import {DevExtremeModule, DxButtonModule, DxDataGridModule} from "devextreme-angular";
import {NgSelectModule} from "@ng-select/ng-select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TemplateDataEditComponent } from './data/template-data-edit.component';
import { DevExtremeDemoComponent } from './grid-demo/dev-extreme-demo.component';
import { HomeScreenModule } from './screens/home-screen/home-screen.module';
import { AppRoutingModule } from './app-routing.module';
import { GridDataUploadComponent } from './grid-upload/grid-data-upload.component';
import { GridUploadOptions } from './models/grid-upload-options';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SidebarContentComponent,
    TemplateDataEditComponent,
    DevExtremeDemoComponent,
    GridDataUploadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserModule,
    AuthorizeModule,
    HomeScreenModule,
    AppRoutingModule,
    BdsUiModule,
    BdsUiSidebarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatExpansionModule,
    FontAwesomeModule,
    BdsSwitchboardModule,
    DxDataGridModule,
    DxButtonModule,
    DevExtremeModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
