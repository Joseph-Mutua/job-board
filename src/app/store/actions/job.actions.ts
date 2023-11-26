import { createAction, props } from '@ngrx/store';
import { Job } from '../../interfaces/job.model';

export const loadJobs = createAction('[Job List] Load Jobs');

export const loadJobsSuccess = createAction(
  '[Job List] Load Jobs Success',
  props<{ jobs: Job[] }>()
);
export const loadJobsFailure = createAction(
  '[Job List] Load Jobs Failure',
  props<{ error: any }>()
);
export const setFilter = createAction(
  '[Job List] Set Filter',
  props<{ filter: any }>()
);
export const setSort = createAction(
  '[Job List] Set Sort',
  props<{ sort: any }>()
);
