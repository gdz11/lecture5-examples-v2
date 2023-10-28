import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';



const passwordMatchValidator: ValidatorFn = (form) => {
  return form.get('password')?.value == form.get('passwordRepeat')?.value ? null : { 'passwordmismatch': true }
}


@Component({
  selector: 'app-cross-field-validator-example',
  templateUrl: './cross-field-validator-example.component.html',
  styleUrls: ['./cross-field-validator-example.component.scss']
})
export class CrossFieldValidatorExampleComponent {
  
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8)
    ]),
    passwordRepeat: new FormControl('', Validators.required)
  }, passwordMatchValidator)
}
