import { Component } from '@angular/core';
import { SyncValidatorsExampleComponent } from './sync-validators-example/sync-validators-example.component';
import { ComplexExampleComponent } from './complex-example/complex-example.component';
import { CrossFieldValidatorExampleComponent } from './cross-field-validator-example/cross-field-validator-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SyncValidatorsExampleComponent, ComplexExampleComponent, CrossFieldValidatorExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms-validation-example';
}
