import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-main-reminder-add-dialog',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './main-reminder-add-dialog.component.html',
  styleUrl: './main-reminder-add-dialog.component.scss'
})
export class MainReminderAddDialogComponent {
  reminderForm!: FormGroup; // create formgroup too - see OrdersOrdersAddDialogComponent

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.reminderForm = this.fb.group({
      Reminder: ['', Validators.required],
    });
  }
  constructor(private dialogRef: MatDialogRef<MainReminderAddDialogComponent>, private fb: FormBuilder) {
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // Save logic, e.g., send data to the server
    // Optionally, you can pass the form data to the parent component
    this.dialogRef.close(this.reminderForm.value);
  }

}
