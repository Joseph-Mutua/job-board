import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/jobs.service';
import { Job } from '../interfaces/job.model';
import { SharedModule } from '../shared/shared.module';


@Component({
  standalone: true,
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  imports: [SharedModule],
  providers: [JobService],
})

export class JobListingComponent implements OnInit {
  jobListings: Job[] = []; // Assuming jobListings are fetched from the service
  filteredJobs: Job[] = [];
  searchKeyword: string = '';

  constructor(private jobService: JobService) {}

  ngOnInit() {
    // Assuming you're fetching jobListings from a service
    this.jobService.getJobs().subscribe({
      next: (jobs: Job[]) => {
        this.jobListings = jobs;
        this.filteredJobs = jobs; // Initial listing displays all jobs
      },
      error: (error) => {
        console.error('Error fetching jobs: ', error);
      },
    });
  }

  searchJobs() {
    if (this.searchKeyword.trim() !== '') {
      this.filteredJobs = this.jobListings.filter((job) =>
        job.job_title.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.filteredJobs = this.jobListings; // Reset to display all jobs if search is empty
    }
  }

  sortByRelevance() {
    // Add logic to sort jobs by relevance
    // For example: this.filteredJobs.sort((a, b) => a.relevance - b.relevance);
  }

  sortByDateAdded() {
    // Add logic to sort jobs by date added
    // For example: this.filteredJobs.sort((a, b) => a.dateAdded - b.dateAdded);
  }
}
