import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule, MatSidenavModule, MatCheckboxModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Input() opened = true;
  isActive(s: string) {

  }
}
export const sidebarAnimation = trigger('sidebarState', [
  state('expanded', style({
    width: '200px', // Set the desired expanded width
  })),
  state('retracted', style({
    width: '50px', // Set the desired retracted width
  })),
  transition('expanded <=> retracted', animate('0.3s')),
]);


