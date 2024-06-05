import { Component } from '@angular/core';
import {ChildComponentComponent} from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-componet',
  standalone: true,
  imports: [
    ChildComponentComponent
  ],
  templateUrl: './parent-componet.component.html',
  styleUrl: './parent-componet.component.css'
})
export class ParentComponetComponent {


  fnPrintEventFromChild(event: String){
    alert(event);
  }
}
