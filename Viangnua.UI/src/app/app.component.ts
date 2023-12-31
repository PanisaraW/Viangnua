import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {MainViewComponent} from "./main-view/main-view.component";
import {StockViewComponent} from "./stock-view/stock-view.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {NgxEchartsModule, NGX_ECHARTS_CONFIG} from 'ngx-echarts';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    MainViewComponent,
    StockViewComponent,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterLink,
    MatButtonModule,
    NgxEchartsModule
  ],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') }),
    },
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarOpened = true;

  toggleSidenav() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  isActive(s: string) {
    if(s === "/overview"){
      return true;
    }

    return false;
  }
}


