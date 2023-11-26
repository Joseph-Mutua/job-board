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

export interface AppState {
  jobs: Job[];
  filter: string;
  sort: string;
}

export const initialState: AppState = {
  jobs: [
    {
      id: 1856,
      job_title: 'Software Consultant',
      company_name: 'Skinix',
      location: 'Limmared',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      date_posted: '6/7/2023',
      job_type: 'Full-Time',
    },
    {
      id: 3516,
      job_title: 'Senior Developer',
      company_name: 'Photobean',
      location: 'Santa Lucía',
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      date_posted: '5/27/2023',
      job_type: 'Remote',
    },
  ],
  filter: '',
  sort: '',
};

export const jobReducer = createReducer(
  initialState,
  on(loadJobs, (state) => state),
  on(loadJobsSuccess, (state, { jobs }) => {
    return { ...state, jobs };
  }),
  on(loadJobsFailure, (state, { error }) => {
    return { ...state, error };
  }),
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
