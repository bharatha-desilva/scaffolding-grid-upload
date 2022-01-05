import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizeModule } from '@bds/auth';
import { SharedModule, GridUploadOptions, Role, Privilege, AccessService } from '@bds/grid-upload';
import { HomeScreenComponent } from './home-screen.component';
import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const hasPrivilege = Privilege.TEMPLATE_MANAGEMENT;

class MockAccessService {
    hasPrivilege(p: Privilege) {
        return hasPrivilege === p ? of(true) : of(false);
    }
    decodeRole(): Observable<Role> {
        return of(Role.ADMIN);
    }
}

describe('HomeScreenComponent', () => {
    let component: HomeScreenComponent;
    let fixture: ComponentFixture<HomeScreenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeScreenComponent],
            imports: [
                RouterTestingModule,
                AuthorizeModule,
                HttpClientTestingModule,
                SharedModule,
                BrowserAnimationsModule,
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
        fixture = TestBed.createComponent(HomeScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
