import {Component, OnInit} from '@angular/core';
import {ReqresDomainService} from "../../services/reqres-domain.service";
import {UsersInterface} from "../../interfaces/users-interface";
import {JsonPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  constructor(private service: ReqresDomainService){}

  users: UsersInterface[] = []

  ngOnInit() {
    this.getUsersList()
  }

  getUsersList() {
    this.service.getUsersList().subscribe({
      next: result => {
        this.users = result.data;
      },
      error: error => console.error(error)
    })
  }



}
