import { Routes } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {UserShowComponent} from "./components/user-show/user-show.component";

export const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'users/:id', component: UserShowComponent}
];
