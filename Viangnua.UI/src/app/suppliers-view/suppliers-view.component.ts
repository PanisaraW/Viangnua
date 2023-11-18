import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {SuppliersDetailViewComponent} from "./suppliers-detail-view/suppliers-detail-view.component";
import {SupplierAddDialogComponent} from "./supplier-add-dialog/supplier-add-dialog.component";

@Component({
  selector: 'app-suppliers-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, SuppliersDetailViewComponent, SupplierAddDialogComponent],
  templateUrl: './suppliers-view.component.html',
  styleUrl: './suppliers-view.component.scss'
})
export class SuppliersViewComponent {

}
