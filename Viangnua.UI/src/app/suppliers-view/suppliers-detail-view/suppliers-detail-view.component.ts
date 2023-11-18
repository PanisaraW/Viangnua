import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from "@angular/material/dialog";
import {DataSource} from "@angular/cdk/collections";
import {Observable, ReplaySubject} from "rxjs";
import {SupplierAddDialogComponent} from "../supplier-add-dialog/supplier-add-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-suppliers-detail-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule],
  templateUrl: './suppliers-detail-view.component.html',
  styleUrl: './suppliers-detail-view.component.scss'
})
export class SuppliersDetailViewComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataToDisplay = [...ELEMENT_DATA];
  expandedElement: SupplierElement|null=null;
  dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor(private dialog: MatDialog) {}

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    // this.dataSource.setData(this.dataToDisplay);
    const dialogRef = this.dialog.open(SupplierAddDialogComponent, {
      width: '600px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the result, which may contain form data
        console.log(result);
      }
    });
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

}
class ExampleDataSource extends DataSource<SupplierElement> {
  private _dataStream = new ReplaySubject<SupplierElement[]>();

  constructor(initialData: SupplierElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<SupplierElement[]> {
    return this._dataStream;
  }

  disconnect() {
  }

  setData(data: SupplierElement[]) {
    this._dataStream.next(data);
  }
}
export interface SupplierElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: SupplierElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
  }
];
