import { Routes } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';



export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListingComponent },

];
