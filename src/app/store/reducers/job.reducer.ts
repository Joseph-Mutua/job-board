import { createReducer, on } from '@ngrx/store';
import {
  loadJobs,
  loadJobsSuccess,
  loadJobsFailure,
  setFilter,
  setSort,
} from '../actions/job.actions';
import { AppState } from '../state';

export const initialState: AppState = {
  jobs: [],
  filter: '',
  sort: '',
};

export const jobReducer = createReducer(
  initialState,
  on(loadJobs, (state) => state),
  on(loadJobsSuccess, (state, { jobs }) => ({ ...state, jobs })),
  on(loadJobsFailure, (state, { error }) => ({ ...state, error })),
  on(setFilter, (state, { filter }) => ({ ...state, filter })),
  on(setSort, (state, { sort }) => ({ ...state, sort }))
);
