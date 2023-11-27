import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  HttpClientModule,
} from '@angular/common/http';

import { Job } from './interfaces/job.model';
import { jobReducer } from './store/reducers/job.reducer';
import { StoreModule } from '@ngrx/store';
import {JobListingComponent} from './job-listing/job-listing.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    JobListingComponent,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'job-board';
}
