
import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces/job.model';
import { SharedModule } from '../shared/shared.module';
import { JobService } from '../services/jobs.service';
import { StateService } from '../services/state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  imports: [SharedModule],
  providers: [JobService],
})
export class JobListingComponent implements OnInit {
  jobListings: Job[] = [];
  filteredJobs: Job[] = [];
  searchKeyword: string = '';
  sortType: string = '';
  locationKeyword: string = '';

  itemsPerPage = 30;
  currentPage = 1;
  totalPages: number[] = [];

  startIndex: number = 0;
  endIndex: number = 0;

  constructor(
    private jobService: JobService,
    private stateService: StateService
  ) {}

  // ngOnInit() {
  //   this.jobService.getJobs().subscribe((jobs) => {
  //     this.jobListings = jobs;
  //     this.filteredJobs = jobs;

  //     // const totalItems = this.filteredJobs.length;
  //     // this.totalPages = Array(Math.ceil(totalItems / this.itemsPerPage))
  //     //   .fill(0)
  //     //   .map((x, i) => i + 1);
  //   });
  // }
  ngOnInit() {
    this.jobService.getJobs();
    this.stateService.jobs.subscribe((jobs) => {
      this.jobListings = jobs;
      this.filteredJobs = jobs;

      const totalItems = this.filteredJobs.length;
      this.totalPages = Array(Math.ceil(totalItems / this.itemsPerPage))
        .fill(0)
        .map((x, i) => i + 1);
    });
  }

  search(text$: Observable<string>) {
    return text$.pipe(
      map((term) =>
        term === ''
          ? []
          : this.jobListings
              .filter(
                (v) =>
                  v.job_title.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );
  }

  onSearchChange(searchKeyword: string) {
    this.searchKeyword = searchKeyword;
    this.filterJobs();
  }

  onLocationChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.locationKeyword = selectElement.value;
    this.filterJobs();
  }

  onSortChange(sortType: string) {
    this.sortType = sortType;
    this.sortJobs();
  }

  daysAgo(datePosted: string): number {
    const currentDate = new Date();
    const postedDate = new Date(datePosted);
    const diffInTime = currentDate.getTime() - postedDate.getTime();
    return Math.floor(diffInTime / (1000 * 3600 * 24));
  }

  filterJobs() {
    let filtered = [...this.jobListings]; // create a new array

    if (this.searchKeyword.trim() !== '') {
      filtered = filtered.filter(
        (job) =>
          job.job_title
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase()) ||
          job.location
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase()) ||
          job.job_category
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase()) ||
          job.job_type
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase()) ||
          job.company_name
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase())
      );
    }

    if (this.locationKeyword.trim() !== '') {
      filtered = filtered.filter(
        (job) =>
          job.location.toLowerCase() === this.locationKeyword.toLowerCase()
      );
    }

    this.filteredJobs = filtered; // assign the new array to filteredJobs
  }

  sortJobs() {
    if (this.sortType === 'date') {
      this.filteredJobs.sort(
        (a, b) =>
          new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime()
      );
    } else if (this.sortType === 'type') {
      this.filteredJobs.sort((a, b) => a.job_type.localeCompare(b.job_type));
    }
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.calculateIndexes();
  }

  calculateIndexes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return { start, end };
  }

  get paginatedJobs(): Job[] {
    const { start, end } = this.calculateIndexes();
    return this.filteredJobs.slice(start, end);
  }

  // get pageNumbers(): number[] {
  //   return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  // }

  get rangeStart(): number {
    return this.startIndex + 1;
  }

  get rangeEnd(): number {
    return Math.min(
      this.startIndex + this.itemsPerPage,
      this.filteredJobs.length
    );
  }
}