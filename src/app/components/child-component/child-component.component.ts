import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Input({required: true}) message: string = '';
  @Output() customEvent = new EventEmitter<string>();

  fnEmmitEvent(){
    console.log("Component message emitted");
    this.customEvent.emit('Este es otro evento');
  }


}
