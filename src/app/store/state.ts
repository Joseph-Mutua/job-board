import { Job } from '../interfaces/job.model';

export interface AppState {
  readonly jobs: Job[];
  filter: string;
  sort: string;
}
