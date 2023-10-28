import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SyncValidatorsExampleComponent } from './sync-validators-example/sync-validators-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrossFieldValidatorExampleComponent } from './cross-field-validator-example/cross-field-validator-example.component';
import { ComplexExampleComponent } from './complex-example/complex-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SyncValidatorsExampleComponent,
    CrossFieldValidatorExampleComponent,
    ComplexExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
