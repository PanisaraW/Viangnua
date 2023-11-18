import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-main-purchase-view',
  standalone: true,
    imports: [CommonModule, MatGridListModule],
  templateUrl: './main-purchase-view.component.html',
  styleUrl: './main-purchase-view.component.scss'
})
export class MainPurchaseViewComponent {

}
