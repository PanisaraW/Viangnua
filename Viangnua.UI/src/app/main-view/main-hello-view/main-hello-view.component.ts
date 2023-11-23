import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-main-hello-view',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './main-hello-view.component.html',
  styleUrl: './main-hello-view.component.scss'
})
export class MainHelloViewComponent {

}
