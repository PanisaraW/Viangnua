import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-orders-orders-add-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './orders-orders-add-dialog.component.html',
  styleUrl: './orders-orders-add-dialog.component.scss'
})
export class OrdersOrdersAddDialogComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private dialogRef: MatDialogRef<OrdersOrdersAddDialogComponent>, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      buyingPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // Save logic, e.g., send data to the server
    // Optionally, you can pass the form data to the parent component
    this.dialogRef.close(this.productForm.value);
  }
}
