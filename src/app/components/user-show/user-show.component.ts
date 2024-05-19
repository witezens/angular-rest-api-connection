import {Component, Input, OnInit} from '@angular/core';
import {ReqresDomainService} from "../../services/reqres-domain.service";
import {UsersInterface} from "../../interfaces/users-interface";
import {JsonPipe} from "@angular/common";
import {MatCard, MatCardActions, MatCardTitle, MatCardSubtitle,
  MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-show',
  standalone: true,
  imports: [
    JsonPipe,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatButton,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './user-show.component.html',
  styleUrl: './user-show.component.css'
})
export class UserShowComponent implements OnInit {
  constructor(private service: ReqresDomainService){}

  @Input('id') id: string = '';

  ngOnInit() {
    console.log(this.id)
    this.getUserById()
  }

  user: UsersInterface = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
  }

  userNotFound: Boolean = false;

  getUserById() {
    this.service.getUserById(this.id).subscribe({
      next: result => {
        this.user = result.data;
      },
      error: error => {
        if (error.status === 404) {
          this.userNotFound = true
        }
      }
    })
  }









  //@Output() addEvent = new EventEmitter<String>();


  /*user: UserInterface = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  getUserById() {
    this.service.getUserById(this.userId).subscribe({
      next: result => {
        this.user = result.data;
      },
      error: error => console.error(error)
    })
  }

  myFunction(param: String) {
    this.addEvent.emit(param);
  }*/


}
