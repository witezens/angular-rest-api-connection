import { Component, Input } from '@angular/core';
import {RegistroInterface} from "../../interfaces/registro-interface";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-lista-espera',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './lista-espera.component.html',
  styleUrl: './lista-espera.component.css'
})
export class ListaEsperaComponent {
  @Input({required: true}) lista: RegistroInterface[] = []


  removeItem(index: number) {
    this.lista.splice(index, 1);
  }
}
