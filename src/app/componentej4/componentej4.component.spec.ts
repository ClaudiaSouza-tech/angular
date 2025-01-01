import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentej4Component } from './componentej4.component';

describe('Componentej4Component', () => {
  let component: Componentej4Component;
  let fixture: ComponentFixture<Componentej4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentej4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentej4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
