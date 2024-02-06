import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabBookingSystemComponent } from './cab-booking-system.component';

describe('CabBookingSystemComponent', () => {
  let component: CabBookingSystemComponent;
  let fixture: ComponentFixture<CabBookingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabBookingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabBookingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
