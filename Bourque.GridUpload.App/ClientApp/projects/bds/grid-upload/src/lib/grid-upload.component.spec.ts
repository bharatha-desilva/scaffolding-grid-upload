import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperBiComponent } from './grid-upload.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShipperBiComponent', () => {
    let component: ShipperBiComponent;
    let fixture: ComponentFixture<ShipperBiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ShipperBiComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ShipperBiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
