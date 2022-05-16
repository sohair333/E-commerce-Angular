import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableProductsComponent } from './filterable-products.component';

describe('FilterableProductsComponent', () => {
  let component: FilterableProductsComponent;
  let fixture: ComponentFixture<FilterableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterableProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
