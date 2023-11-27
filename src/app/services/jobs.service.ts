import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../interfaces/job.model';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'assets/jobs.json'; // Path to your JSON file

  constructor(private http: HttpClient, private stateService: StateService) {}

  getJobs(): void {
    this.http.get<Job[]>(this.apiUrl).subscribe((jobs) => {
      this.stateService.setJobs(jobs);
    });
  }
}
