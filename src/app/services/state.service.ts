import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../interfaces/job.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _jobs: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>([]);

  //fetch jobs
  get jobs(): Observable<Job[]> {
    return this._jobs.asObservable();
  }

  //set jobs to state
  setJobs(jobs: Job[]): void {
    this._jobs.next(jobs);
  }
}
