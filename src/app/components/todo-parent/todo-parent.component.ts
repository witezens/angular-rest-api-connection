import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader,
  MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {TodoChildComponent} from "../todo-child/todo-child.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators}
  from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {TodoInterface} from "../../interfaces/todo-interface";

@Component({
  selector: 'app-todo-parent',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatFormField,
    MatInput,
    MatCardTitle,
    MatCardSubtitle,
    MatLabel,
    TodoChildComponent,
    ReactiveFormsModule,
    MatButton,
    MatError
  ],
  templateUrl: './todo-parent.component.html',
  styleUrl: './todo-parent.component.css'
})
export class TodoParentComponent {
  private readonly _formBuilder = inject(FormBuilder)

  /*todoForm = new FormGroup({
    name: new FormControl('', Validators.required),
  })*/

  todoForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
  })


  onSubmit(){
    let item: TodoInterface = {
      name: this.todoForm.controls.name.value || "",
      status: "open"
    }

    this.itemsFromParent.push(item);
  }

  itemsFromParent: TodoInterface[] = [];

}
