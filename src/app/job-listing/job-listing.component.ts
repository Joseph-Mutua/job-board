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

  itemsPerPage = 10;
  currentPage = 1;
  totalPages: number[] = [];

  endIndex: number = 0;

  constructor(
    private jobService: JobService,
    private stateService: StateService
  ) {}

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

  //Filtering and Sort Functionality
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

  //Search input function
  onSearchChange(searchKeyword: string) {
    this.searchKeyword = searchKeyword;
    this.filterJobs();
  }

  //Location input function
  onLocationChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.locationKeyword = selectElement.value;
    this.filterJobs();
  }

  //Sort input function
  onSortChange(sortType: string) {
    this.sortType = sortType;
    this.sortJobs();
  }

  //Date posted function
  daysAgo(datePosted: string): number {
    const currentDate = new Date();
    const postedDate = new Date(datePosted);
    const diffInTime = currentDate.getTime() - postedDate.getTime();
    return Math.floor(diffInTime / (1000 * 3600 * 24));
  }

  //Filtering and Sort Functionality
  filterJobs() {
    let filtered = [...this.jobListings];

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
    // assign the new array to filteredJobs
    this.filteredJobs = filtered;
  }

  //Sorting Functionality
  sortJobs() {
    if (this.sortType === 'date') {
      this.filteredJobs.sort(
        (a, b) =>
          new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime()
      );
    } else if (this.sortType === 'category') {
      this.filteredJobs.sort((a, b) =>
        a.job_category.localeCompare(b.job_category)
      );
    }
  }

  //Pagination Functionality
  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  //Pagination Functionality To switch pages
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.calculateIndexes();
  }

  //Pagination Functionality To calculate indexes
  calculateIndexes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    return { start, end };
  }

  //Pagination Functionality To get paginated jobs
  get paginatedJobs(): Job[] {
    const { start, end } = this.calculateIndexes();
    return this.filteredJobs.slice(start, end);
  }

  //Pagination Functionality To get start of Show jobs
  get rangeStart(): number {
    return this.startIndex + 1;
  }

  //Pagination Functionality To get end of Show jobs
  get rangeEnd(): number {
    return Math.min(
      this.startIndex + this.itemsPerPage,
      this.filteredJobs.length
    );
  }
}
