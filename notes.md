## PRE-REQUISITES

1. install de Nodejs
2. install of @angular/cli (`npm install -g @angular/cli`)
3. install Angular Dev tools (plugin)

## URL REST-API

https://www.reqres.in

## RUN DEVELOPMENT SERVER
`ng serve`


## ANGULAR MATERIAL
`ng add @angular/material`


Los pipes son una herramienta de Angular que nos permite transformar visualmente la información, por ejemplo, cambiar un texto a mayúsculas o minúsculas, o darle formato de fecha y hora.

https://angular.io/api/common/AsyncPipe

* uppercase
* Lowercase
* Slice
* Decimal
* Percent
* Currency
* Json
* Async
* Date





### FORMULARIOS REACTIVOS

Los formularios reactivos son una forma de crear y gestionar los formularios en angular utilizando enfoques basados en modelo sy observables.
Nos permite definir la estructura y el comportamiento de los formularios de manera programática.

``{
  titulo: "";
  subTitulo: "";
  detalle: "";
}``

>Los datos de dichos formularios están enlazados a un modelo de datos (**Objeto**)

>Cada atributo de ese modelo de datos será enlazado a un elemento en el **HTML**

>Cada cambio que ocurre en el formulario devuelve un nuevo estado, lo que ayuda a mantener la integridad del modelo de datos entre cada cambio

## Uso de Formulario reactivos

Para hacer uso de los formularios reactivos necesitamos importar el módulo **ReactiveFormsModule** dentro del **modulo** o **componente standalone** que lo necesite

## Validacion

Los formularios reactivos también permiten apliar validadores a cada atributo del modelo de datos o directamente al **FormGroup**
Podesmos usar los valiadores que nos provee angular a tráves de la clase **Validators** o crear nuestros propios validadores

>{ 
> titulo: ["", Validators.required];
> subTitulo: ["", Validators.required;
> detalle: ["", Validators.required;
}``

