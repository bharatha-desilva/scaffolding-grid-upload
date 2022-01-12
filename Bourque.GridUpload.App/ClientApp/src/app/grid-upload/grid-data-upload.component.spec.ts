import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDataUploadComponent } from './grid-data-upload.component';

describe('GridDataUploadComponent', () => {
  let component: GridDataUploadComponent;
  let fixture: ComponentFixture<GridDataUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDataUploadComponent ]
    })
    .compileComponents();
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
