import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexExampleComponent } from './complex-example.component';

describe('ComplexExampleComponent', () => {
  let component: ComplexExampleComponent;
  let fixture: ComponentFixture<ComplexExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
