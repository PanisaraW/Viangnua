import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataSource} from "@angular/cdk/collections";
import {Observable, ReplaySubject} from "rxjs";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {
  StockProductAddDialogComponent
} from "./stock-product-add-dialog/stock-product-add-dialog.component";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-stock-product-view',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, FormsModule, MatInputModule],
  templateUrl: './stock-product-view.component.html',
  styleUrl: './stock-product-view.component.scss',
})
export class StockProductViewComponent {
  displayedColumns: string[] = ['Number', 'Name', 'Price'];
  dataToDisplay = [...ELEMENT_DATA];
  expandedElement: PeriodicElement|null=null;
  dataSource = new ExampleDataSource(this.dataToDisplay);
  filteredDataArray: any[] = [];
  filterValue = '';

  applyFilter($event: KeyboardEvent) {
    this.filteredDataArray = this.yourDataArray.filter(item =>
      item.description.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
  yourDataArray = [
    { description: 'Item 1', /* other properties if needed */ },
    { description: 'Item 2', /* other properties if needed */ },
    { description: 'Item 3', /* other properties if needed */ },
    // Add more items as needed
  ];

  constructor(private dialog: MatDialog) {}
  addData() {
    const dialogRef = this.dialog.open(StockProductAddDialogComponent, {
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

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {
  }

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}

export interface PeriodicElement {
  Name: string;
  Number: number;
  Price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Number: 1,
    Name: 'Elephant Pants',
    Price: 100
  }, {
    Number: 2,
    Name: 'Cat Pants',
    Price: 150
  }, {
    Number: 3,
    Name: 'Dog Pants',
    Price: 240
  }, {
    Number: 4,
    Name: 'Bunny Pants',
    Price: 70
  }, {
    Number: 5,
    Name: 'Piggy Pants',
    Price: 580
  },
];
