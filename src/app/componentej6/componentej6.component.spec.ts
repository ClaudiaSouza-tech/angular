import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentej6Component } from './componentej6.component';

describe('Componentej6Component', () => {
  let component: Componentej6Component;
  let fixture: ComponentFixture<Componentej6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentej6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentej6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
