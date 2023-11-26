import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/jobs.service';
import { Job } from '../interfaces/job.model';
import { SharedModule } from '../shared/shared.module';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/state';
import { loadJobs } from '../store/actions/job.actions';

import { setFilter, setSort } from '../store/actions/job.actions';


@Component({
  standalone: true,
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  imports: [SharedModule],
  providers: [JobService],
})
export class JobListingComponent implements OnInit {
  jobListings$: Observable<Job[]>;

  constructor(private store: Store<AppState>) {
    this.jobListings$ = store.select(state => {
      let jobs = state.jobs;

      // Apply filter
      if (state.filter) {
        jobs = jobs.filter(job => /* filter jobs based on state.filter */);
      }

      // Apply sort
      if (state.sort) {
        jobs = jobs.sort((a, b) => /* sort jobs based on state.sort */);
      }

      return jobs;
    });
  }

  ngOnInit() {
    this.store.dispatch(loadJobs());
  }

  onFilterChange(filter: string) {
    this.store.dispatch(setFilter({ filter }));
  }

  onSortChange(sort:any) {
    this.store.dispatch(setSort({ sort }));
  }

  // other methods...
}