import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizeModule, AuthorizeOptions } from '@bds/auth';
import { BdsUiModule } from '@bds/ui';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AuthorizeModule,
                BdsUiModule,
                BrowserAnimationsModule,
                AppModule,
            ],
            declarations: [AppComponent],
            providers: [
                { provide: APP_BASE_HREF, useValue: 'http://localhost:4200' },
                AuthorizeOptions,
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
