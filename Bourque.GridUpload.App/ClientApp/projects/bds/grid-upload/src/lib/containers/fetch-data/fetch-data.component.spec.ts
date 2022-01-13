import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FetchDataComponent } from './fetch-data.component';
import { GridUploadOptions } from '../../models/grid-upload-options';

describe('FetchDataComponent', () => {
    let component: FetchDataComponent;
    let fixture: ComponentFixture<FetchDataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [FetchDataComponent],
            providers: [
                {
                    provide: GridUploadOptions,
                    useValue: { gridUploadApiUri: 'http://localhost:8080' },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FetchDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
