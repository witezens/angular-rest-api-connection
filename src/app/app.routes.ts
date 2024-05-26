import { Routes } from '@angular/router';
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UserShowComponent} from "./components/user-show/user-show.component";
import {UserFormComponent} from "./components/user-form/user-form.component";

export const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'users/:id', component: UserShowComponent},
  {path: 'user/create', component: UserFormComponent},
];
