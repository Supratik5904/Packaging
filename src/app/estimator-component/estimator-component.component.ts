import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AdditionalOptions, EstimatorFormEntity, Lamination, Result, SurfaceProtection } from '../models/Estimator';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estimator-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './estimator-component.component.html',
  styleUrl: './estimator-component.component.css'
})
export class EstimatorComponentComponent implements OnInit {
  private modalService = inject(NgbModal);
  estimatorForm!: FormGroup;
  additionalOptions = Object.values(AdditionalOptions);
  surfaceProtection = Object.values(SurfaceProtection);
  lamination = Object.values(Lamination)
  boardCompanies: string[] = ['ITC', 'JK Paper', 'Century']; // sample companies
  boardListFromAPI: any[] = [];
  displayStyle: string = 'none';
  result: Result = {
    unitPrice: 0,
    sizeTable: [],
    costBreakdown: []
  };
  

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.estimatorForm = this.fb.group({
      customerName: ['', Validators.required],
      customerPhone: [null, Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      productSize: this.fb.group({
        length: [null, Validators.required],
        breadth: [null, Validators.required]
      }),
      bleed: [null],
      boardCompany: [''],
      boardList: this.fb.group({
        fullName: [''],
        gsmValue: [null],
        length: [null],
        breadth: [null],
        price: [null],
        type: ['']
      }),
      dieCost: [null],
      lamination: [''],
      surfaceProtection: [''],
      additionalOptions: [''],
      printingRate: [null],
      processColor: [''],
      productQuantity: [null],
      dhlCost: [null],
      profit: [null]
    });
  }



  onSubmit(content: any): void {
    const formData = this.estimatorForm.value;
    
    this.http.post('http://localhost:3000/estimate', formData).subscribe((response: any) => {
      // Populate modal data structure
      this.result.unitPrice = response.unitPrice;
      this.result.sizeTable = response.sizeTable;
      this.result.costBreakdown = [
      ];
  
    });
    this.openResultModal(content)
  }

  openResultModal(content: any) {
		this.modalService.open(content, { scrollable: true, size: 'lg' });
	}
}
