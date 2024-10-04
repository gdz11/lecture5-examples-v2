import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sync-validators-example',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './sync-validators-example.component.html',
  styleUrl: './sync-validators-example.component.css'
})
export class SyncValidatorsExampleComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])

  });

  get name(){
    return this.form.get('name');
  }

  get lastname() {
    return this.form.get('lastname');
  }
}
