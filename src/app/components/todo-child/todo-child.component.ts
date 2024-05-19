import {Component, Input} from '@angular/core';
import {TodoInterface} from "../../interfaces/todo-interface";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-todo-child',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './todo-child.component.html',
  styleUrl: './todo-child.component.css'
})
export class TodoChildComponent {
  @Input() items: TodoInterface[] = []
}
