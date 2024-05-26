import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {JsonPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    JsonPipe,
    MatError,
    MatButton
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    job: new FormControl('', Validators.required),
  })

  fnSubmit(){
    console.warn(this.userForm.value)
  }

}
