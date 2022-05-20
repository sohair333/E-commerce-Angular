import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProdustComponent } from './edite-produst.component';

describe('EditeProdustComponent', () => {
  let component: EditeProdustComponent;
  let fixture: ComponentFixture<EditeProdustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeProdustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeProdustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
