import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ImageCroppedEvent, ImageCropperModule} from 'ngx-image-cropper';

@Component({
  selector: 'app-inventory-product-add-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogTitle, MatDialogActions, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgOptimizedImage, ImageCropperModule],
  templateUrl: './stock-product-add-dialog.component.html',
  styleUrl: './stock-product-add-dialog.component.scss'
})
export class StockProductAddDialogComponent implements OnInit {
  productForm!: FormGroup;
  selectedFile: File | null = null;
  selectedFileUrl: string | ArrayBuffer | null | undefined = null;
  showCropper = false;
  imageChangedEvent: any;

  constructor(private dialogRef: MatDialogRef<StockProductAddDialogComponent>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
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

  onFileSelected(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files.item(0);

      // Display the selected image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedFileUrl = e.target?.result;
        this.showCropper = true;
      };

      if (this.selectedFile){
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.selectedFileUrl = event.base64;
  }

  imageLoaded(): void {
    // Image loaded event
  }

  loadImageFailed(): void {
    // Load image failed event
  }

  openGallery(): void {
    // Implement the logic to open the gallery or use a third-party library
    // For example, you can use ngx-image-cropper's `fileChangeEvent` to trigger the file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', (e) => this.onFileSelected(e));
    fileInput.click();
  }
}
