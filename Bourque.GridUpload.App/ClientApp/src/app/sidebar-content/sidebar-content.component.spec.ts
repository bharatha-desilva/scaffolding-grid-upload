import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BdsUiSidebarModule } from '@bds/ui';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarContentComponent } from './sidebar-content.component';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccessService, Role, GridUploadModule, GridUploadOptions } from '@bds/grid-upload';

class MockAccessService {
    hasPrivilege(): Observable<boolean> {
        return of(true);
    }
    decodeRole(): Observable<Role> {
        return of(Role.ADMIN);
    }
}

describe('SidebarContentComponent', () => {
    let component: SidebarContentComponent;
    let fixture: ComponentFixture<SidebarContentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidebarContentComponent],
            imports: [
                RouterTestingModule,
                BdsUiSidebarModule,
                BrowserAnimationsModule,
                FontAwesomeModule,
                HttpClientTestingModule,
                GridUploadModule,
            ],
            providers: [
                {
                    provide: AccessService,
                    useValue: new MockAccessService(),
                },
                {
                    provide: GridUploadOptions,
                    useValue: { gridUploadApiUri: 'http://localhost:8080' },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
