import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSalleingPackagesComponent } from './best-salleing-packages.component';

describe('BestSalleingPackagesComponent', () => {
  let component: BestSalleingPackagesComponent;
  let fixture: ComponentFixture<BestSalleingPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSalleingPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSalleingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
