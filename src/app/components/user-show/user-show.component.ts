import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../interfaces/user-interface";
import {JsonPipe} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-show',
  standalone: true,
  imports: [
    JsonPipe, MatButtonModule, MatCardModule,
  ],
  templateUrl: './user-show.component.html',
  styleUrl: './user-show.component.css'
})
export class UserShowComponent implements OnInit {

  constructor(private service: UserService) { }

  @Input('id') userId: string | undefined;

  ngOnInit() {
    this.getUserById()
  }

  user: UserInterface = {
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



}
