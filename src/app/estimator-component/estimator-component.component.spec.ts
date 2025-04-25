import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorComponentComponent } from './estimator-component.component';

describe('EstimatorComponentComponent', () => {
  let component: EstimatorComponentComponent;
  let fixture: ComponentFixture<EstimatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
