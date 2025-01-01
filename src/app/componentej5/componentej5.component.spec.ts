import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentej5Component } from './componentej5.component';

describe('Componentej5Component', () => {
  let component: Componentej5Component;
  let fixture: ComponentFixture<Componentej5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentej5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentej5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
