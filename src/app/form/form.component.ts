import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AssetDataService } from '../../assetData.service';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  
    investmentForm: FormGroup;

  constructor(private fb: FormBuilder, private assetService: AssetDataService) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.min(1)]],
    price: ['', [Validators.required, Validators.min(0.01)]],
    date: ['', Validators.required],
    });
  }

  
    onSubmit() {
      if (this.investmentForm.valid) {
        this.assetService.addAsset(this.investmentForm.value);
        this.investmentForm.reset();
        alert('Asset added successfully!');
      }
    }
}
