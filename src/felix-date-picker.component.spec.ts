import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDaterangepickerComponent } from './felix-date-picker.component';

describe('NgDaterangepickerComponent', () => {
  let component: NgDaterangepickerComponent;
  let fixture: ComponentFixture<NgDaterangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDaterangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
