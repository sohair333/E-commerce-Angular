import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingPackageComponent } from './best-selling-package.component';

describe('BestSellingPackageComponent', () => {
  let component: BestSellingPackageComponent;
  let fixture: ComponentFixture<BestSellingPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellingPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellingPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
