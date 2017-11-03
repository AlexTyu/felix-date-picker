import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelixDatePickerComponent } from './felix-date-picker.component';

describe('FelixDatePickerComponent', () => {
  let component: FelixDatePickerComponent;
  let fixture: ComponentFixture<FelixDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelixDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelixDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
