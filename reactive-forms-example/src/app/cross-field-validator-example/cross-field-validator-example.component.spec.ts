import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidatorExampleComponent } from './cross-field-validator-example.component';

describe('CrossFieldValidatorExampleComponent', () => {
  let component: CrossFieldValidatorExampleComponent;
  let fixture: ComponentFixture<CrossFieldValidatorExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossFieldValidatorExampleComponent]
    });
    fixture = TestBed.createComponent(CrossFieldValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
