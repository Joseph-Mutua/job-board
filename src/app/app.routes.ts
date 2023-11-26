import { Routes } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { MyCounterComponent } from './counter/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListingComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: 'count', component: MyCounterComponent },
];
