import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RegistroInterface} from "../../interfaces/registro-interface";
import {JsonPipe} from "@angular/common";
import {ListaEsperaComponent} from "../lista-espera/lista-espera.component";

@Component({
  selector: 'app-registro-atencion',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    JsonPipe,
    ListaEsperaComponent
  ],
  templateUrl: './registro-atencion.component.html',
  styleUrl: './registro-atencion.component.css'
})
export class RegistroAtencionComponent {

  registroForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dni: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  listaEspera: RegistroInterface[] = []

  enviarFormulario() : void {
    console.log(this.registroForm.value)

    let el: RegistroInterface = {
      name: this.registroForm.controls.name.value || '',
      dni: this.registroForm.controls.dni.value || '',
    }

    this.listaEspera.push(el)
  }

}
