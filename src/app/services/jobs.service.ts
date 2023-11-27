// job.service.ts
// job.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'assets/jobs.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }
}