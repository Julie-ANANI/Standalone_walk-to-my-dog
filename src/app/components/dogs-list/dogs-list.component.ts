import { Component } from '@angular/core';
import {DogsService} from "../../service/dogs/dogs.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.scss'
})

export class DogsListComponent {
  constructor(readonly  dogsService: DogsService) { }
}
