import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GridDataUploadComponent } from './grid-data-upload.component';

describe('GridDataUploadComponent', () => {
    let component: GridDataUploadComponent;
    let fixture: ComponentFixture<GridDataUploadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GridDataUploadComponent],
            imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GridDataUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
