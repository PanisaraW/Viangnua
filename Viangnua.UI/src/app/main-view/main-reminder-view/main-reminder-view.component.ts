import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MainReminderAddDialogComponent} from "./main-reminder-add-dialog/main-reminder-add-dialog.component";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-main-reminder-view',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatListModule],
  templateUrl: './main-reminder-view.component.html',
  styleUrl: './main-reminder-view.component.scss',
})
export class MainReminderViewComponent {
  selected?: Date | null;
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(MainReminderAddDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
