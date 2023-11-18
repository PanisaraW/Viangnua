import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainViewComponent} from "./main-view/main-view.component";
import {InventoryViewComponent} from "./inventory-view/inventory-view.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    SidebarComponent,
    MainViewComponent,
    InventoryViewComponent,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Viangnua.UI';
}
