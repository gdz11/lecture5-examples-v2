import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexExampleComponent } from './complex-example.component';

describe('ComplexExampleComponent', () => {
  let component: ComplexExampleComponent;
  let fixture: ComponentFixture<ComplexExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexExampleComponent]
    });
    fixture = TestBed.createComponent(ComplexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
