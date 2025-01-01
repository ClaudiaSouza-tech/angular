import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentej2Component } from './componentej2.component';

describe('Componentej2Component', () => {
  let component: Componentej2Component;
  let fixture: ComponentFixture<Componentej2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentej2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentej2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
