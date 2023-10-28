import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncValidatorsExampleComponent } from './sync-validators-example.component';

describe('SyncValidatorsExampleComponent', () => {
  let component: SyncValidatorsExampleComponent;
  let fixture: ComponentFixture<SyncValidatorsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyncValidatorsExampleComponent]
    });
    fixture = TestBed.createComponent(SyncValidatorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
