import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentej3Component } from './componentej3.component';

describe('Componentej3Component', () => {
  let component: Componentej3Component;
  let fixture: ComponentFixture<Componentej3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentej3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentej3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
