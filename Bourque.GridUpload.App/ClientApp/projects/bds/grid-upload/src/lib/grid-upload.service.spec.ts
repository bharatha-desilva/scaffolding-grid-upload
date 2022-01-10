import { TestBed } from '@angular/core/testing';

import { GridUploadService } from './grid-upload.service';

describe('GridUploadService', () => {
  let service: GridUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
