import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-example',
  templateUrl: './complex-example.component.html',
  styleUrls: ['./complex-example.component.scss']
})
export class ComplexExampleComponent {
  constructor(private fb: FormBuilder) { }

  genders = [
    { id: 1, name: 'Male'},
    { id: 2, name: 'Female' },
    { id: null, name: 'Not specified'}
  ]

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]{1,}')
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]{1,}')
    ]),
    gender: new FormControl(null, Validators.required),
    phone: new FormControl('', Validators.pattern('2[0-9]{6}')),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    isLegalAge: new FormControl(false, { validators: Validators.requiredTrue,  updateOn: 'change' })
    
  },{ updateOn: 'blur' });


  get name(){
    return this.form.get('name');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get gender(){
    return this.form.get('gender');
  }

  get phone(){
    return this.form.get('phone');
  }

  get email(){
    return this.form.get('email');
  }

  get isLegalAge(){
    return this.form.get('isLegalAge');
  }

  register(){
    console.log(this.form.value);
  }
}
