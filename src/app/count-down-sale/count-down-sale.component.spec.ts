import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownSaleComponent } from './count-down-sale.component';

describe('CountDownSaleComponent', () => {
  let component: CountDownSaleComponent;
  let fixture: ComponentFixture<CountDownSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
