import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUploadComponent } from './grid-upload.component';

describe('GridUploadComponent', () => {
  let component: GridUploadComponent;
  let fixture: ComponentFixture<GridUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
