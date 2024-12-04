import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartevisiteComponent } from './cartevisite.component';

describe('CartevisiteComponent', () => {
  let component: CartevisiteComponent;
  let fixture: ComponentFixture<CartevisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartevisiteComponent]
    });
    fixture = TestBed.createComponent(CartevisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
