import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../interfaces/user-interface";
import {JsonPipe} from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    JsonPipe, MatTableModule, MatAnchor, RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    console.log("users works!")
    this.getUsers()
  }

  users: UserInterface[] = []

  getUsers() {
    this.service.getUsers().subscribe({
      next: result => {
        this.users = result.data;
      },
      error: error => console.error(error)
    })
  }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'show'];

}
