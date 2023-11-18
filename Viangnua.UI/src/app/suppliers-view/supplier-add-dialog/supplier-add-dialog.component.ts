import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-supplier-add-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogTitle, MatDialogActions, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './supplier-add-dialog.component.html',
  styleUrl: './supplier-add-dialog.component.scss'
})
export class SupplierAddDialogComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private dialogRef: MatDialogRef<SupplierAddDialogComponent>, private fb: FormBuilder) {}

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
