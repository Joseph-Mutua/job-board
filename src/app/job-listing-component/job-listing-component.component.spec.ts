import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingComponentComponent } from './job-listing-component.component';

describe('JobListingComponentComponent', () => {
  let component: JobListingComponentComponent;
  let fixture: ComponentFixture<JobListingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListingComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
