import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsoulProductsComponent } from './carsoul-products.component';

describe('CarsoulProductsComponent', () => {
  let component: CarsoulProductsComponent;
  let fixture: ComponentFixture<CarsoulProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsoulProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsoulProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
