import { Routes } from '@angular/router';
import {DogsListComponent} from "./components/dogs-list/dogs-list.component";

export const routes: Routes = [
  { path: ' ', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
];
