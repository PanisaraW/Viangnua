import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {OrdersOrdersAddDialogComponent} from "../orders-orders-add-dialog/orders-orders-add-dialog.component";
import {DataSource} from "@angular/cdk/collections";
import {Observable, ReplaySubject} from "rxjs";

@Component({
  selector: 'app-orders-orders-details-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule],
  templateUrl: './orders-orders-details-view.component.html',
  styleUrl: './orders-orders-details-view.component.scss'
})
export class OrdersOrdersDetailsViewComponent {
  displayedColumns: string[] = ['Number', 'Name', 'Status'];
  dataToDisplay = [...ELEMENT_DATA];
  expandedElement: SupplierElement|null=null;
  dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor(private dialog: MatDialog) {}

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    // this.dataSource.setData(this.dataToDisplay);
    const dialogRef = this.dialog.open(OrdersOrdersAddDialogComponent, {
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
  Name: string;
  Number: number;
  Status: string;
}

const ELEMENT_DATA: SupplierElement[] = [
  {
    Number: 1,
    Name: 'Mr. John Doe',
    Status: 'Finished',
  }, {
    Number: 2,
    Name: 'Ms. Jane Doe',
    Status: 'Ongoing',
  }
];

