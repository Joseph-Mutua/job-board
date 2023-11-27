import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import {
  loadJobs,
  loadJobsSuccess,
  loadJobsFailure,
  setFilter,
  setSort,
} from '../actions/job.actions';
import { Job } from '../../interfaces/job.model';
import { JobService } from '../../services/jobs.service';

export interface AppState {
  jobs: Job[];
  filter: string;
  sort: string;
}

export const initialState: AppState = {
  jobs: [],
  filter: '',
  sort: '',
};

export const jobReducer = createReducer(
  initialState,
  on(loadJobsSuccess, (state, { jobs }) => {
    return { ...state, jobs };
  }),
  //   on(loadJobsSuccess, (state, { jobs }) => {
  //     console.log("LOAD JOBS SUCCESS",jobs);
  //     return { ...state, jobs };
  //   }),
  //   on(loadJobsFailure, (state, { error }) => {
  //     console.error("LOAD JOBS FAILURE",error);
  //     return { ...state };
  //   }),
  on(setFilter, (state, { filter }: { filter: any }) => {
    const filteredJobs = state.jobs.filter(
      (job) =>
        job.job_title.toLowerCase().includes(filter.job_title.toLowerCase()) &&
        job.location.toLowerCase().includes(filter.location.toLowerCase()) &&
        job.company_name.toLowerCase().includes(filter.company.toLowerCase()) &&
        job.job_type.toLowerCase() === filter.type.toLowerCase()
    );
    return { ...state, jobs: filteredJobs, filter };
  }),
  on(setSort, (state, { sort }) => {
    let sortedJobs: Job[] | undefined;
    if (sort === 'date') {
      sortedJobs = [...state.jobs].sort(
        (a, b) =>
          new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime()
      );
    } else if (sort === 'type') {
      sortedJobs = [...state.jobs].sort((a, b) =>
        a.job_type.localeCompare(b.job_type)
      );
    }
    return { ...state, jobs: sortedJobs || state.jobs, sort };
  })
);

export const selectJobState = createFeatureSelector<AppState>('jobs');

export const selectJobs = createSelector(
  selectJobState,
  (state: AppState) => state.jobs
);
