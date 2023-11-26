import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces/job.model';
import { SharedModule } from '../shared/shared.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectJobs } from '../store/reducers/job.reducer';
import { loadJobs } from '../store/actions/job.actions';
import { setFilter, setSort } from '../store/actions/job.actions';

@Component({
  standalone: true,
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  imports: [SharedModule],
})
export class JobListingComponent implements OnInit {
  jobListings$: Observable<Job[]>;
  jobListings: Job[] = []; // Add this line

  constructor(private store: Store<AppState>) {
    this.jobListings$ = this.store.select(selectJobs);
    console.log('LISTINGS OBJECT', this.jobListings$);
  }

  ngOnInit() {
    this.store.dispatch(loadJobs());
    this.jobListings$.subscribe((jobs) => {
      console.log('JOB LISTINGS', jobs);
      this.jobListings = jobs; // Add this line
    });
  }

  onFilterChange(filter: string) {
    this.store.dispatch(setFilter({ filter }));
  }

  filterJobs(title: string, location: string, company: string, type: string) {
    const filter = { title, location, company, type };
    this.store.dispatch(setFilter({ filter: JSON.stringify(filter) }));
  }

  sortJobs(criteria: string) {
    this.store.dispatch(setSort({ sort: criteria }));
  }
}
