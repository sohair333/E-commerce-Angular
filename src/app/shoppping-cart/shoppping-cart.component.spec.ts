import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingCartComponent } from './shoppping-cart.component';

describe('ShopppingCartComponent', () => {
  let component: ShopppingCartComponent;
  let fixture: ComponentFixture<ShopppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
