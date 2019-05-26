import { TestBed } from '@angular/core/testing';

import { NgxBsTableService } from './ngx-bs-table.service';

describe('NgxBsTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBsTableService = TestBed.get(NgxBsTableService);
    expect(service).toBeTruthy();
  });
});
