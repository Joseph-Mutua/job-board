import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { jobReducer } from '../store/reducers/job.reducer';
import { JobEffects } from '../store/effects/job.effects';

@NgModule({
  declarations: [
    // Declare your common directives and pipes here
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    //StoreModule.forRoot({ jobs: jobReducer }),
    // EffectsModule.forRoot([JobEffects]),
    // other common modules

    NgbModule,
    NgbTypeaheadModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StoreModule,

    //EffectsModule,
    // other common modules

    NgbModule,
    NgbTypeaheadModule,
  ],
})
export class SharedModule {}
