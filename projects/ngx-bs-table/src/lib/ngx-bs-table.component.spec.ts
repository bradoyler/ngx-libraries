import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBsTableComponent } from './ngx-bs-table.component';

describe('NgxBsTableComponent', () => {
  let component: NgxBsTableComponent;
  let fixture: ComponentFixture<NgxBsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
