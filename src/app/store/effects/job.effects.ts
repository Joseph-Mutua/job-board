import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JobService } from '../../services/jobs.service';
import { loadJobs, loadJobsSuccess, loadJobsFailure } from '../actions/job.actions';

@Injectable()
export class JobEffects {
  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJobs),
      mergeMap(() =>
        this.jobService.getJobs().pipe(
          map((jobs) => loadJobsSuccess({ jobs })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private jobService: JobService) {}
}
