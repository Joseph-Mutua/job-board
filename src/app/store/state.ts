import { Job } from '../interfaces/job.model';


// interface JobState {
//   jobs: Job[];
//   filter: any;
//   sort: any;
// }

// export interface AppState {
//   jobs: JobState;
// }


interface JobState {
  jobs: Job[];
  filter: any;
  sort: any;
}

export interface AppState {
  job: JobState;
}


// export interface CountState{
//     count: number;
// }