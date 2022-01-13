import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizeModule, AuthorizeOptions } from '@bds/auth';
import { BdsUiModule, BdsUiSidebarModule } from '@bds/ui';
import { BDSINTERNAL_API_BASE_URL } from '@bds/internal-api';
import { THIS_APPLICATION_CODE, THIS_APPLICATION_NAME } from '@bds/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { GridUploadModule, GridUploadOptions } from '@bds/grid-upload';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomeScreenModule } from './screens/home-screen/home-screen.module';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { BdsSwitchboardModule } from '@bds/application-pathing';

import { TemplateDataEditComponent } from './data/template-data-edit.component';
import { DevExtremeModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { DevExtremeDemoComponent } from './grid-demo/dev-extreme-demo.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    declarations: [
        AppComponent,
        SidebarContentComponent,
        TemplateDataEditComponent,
        DevExtremeDemoComponent,
    ],
    imports: [
        BrowserModule,
        //AuthorizeModule,  TODO
        BdsUiModule,
        BdsUiSidebarModule,
        BrowserAnimationsModule,
        GridUploadModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule,
        MatExpansionModule,
        FontAwesomeModule,
        HomeScreenModule,
        HttpClientModule,
        FormsModule,
        BdsSwitchboardModule,
        AppRoutingModule,
        DxDataGridModule,
        DxButtonModule,
        DevExtremeModule,
        NgSelectModule,
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
