import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';

// Import other common modules, pipes, directives
// For example:
// import { CustomDirective } from './directives/custom.directive';
// import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    // Declare your common directives and pipes here
    // For example:
    // CustomDirective,
    // CustomPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    JsonPipe,
    // other common modules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    JsonPipe,
    // other common modules
    // CustomDirective,
    // CustomPipe,
  ],
})
export class SharedModule {}
