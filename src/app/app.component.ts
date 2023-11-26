import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  HttpClientModule,
} from '@angular/common/http';

import { Job } from './interfaces/job.model';
import {JobListingComponent} from './job-listing/job-listing.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    JobListingComponent,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'job-board';

  myJobs: Job[] = [
    {
      id: 1,
      job_title: 'Accounting Assistant IV',
      company_name: 'Vidoo',
      location: 'Huangtan',
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    },
    {
      id: 2,
      job_title: 'Social Worker',
      company_name: 'Livefish',
      location: 'Tsingoni',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    },
    {
      id: 3,
      job_title: 'Administrative Assistant IV',
      company_name: 'Rooxo',
      location: 'Kardamás',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 4,
      job_title: 'Civil Engineer',
      company_name: 'Gigazoom',
      location: 'La Esperanza',
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      id: 5,
      job_title: 'Executive Secretary',
      company_name: 'Photofeed',
      location: 'Mabuttal East',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    },
    {
      id: 6,
      job_title: 'Biostatistician IV',
      company_name: 'Vimbo',
      location: 'Balgarevo',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    {
      id: 7,
      job_title: 'Legal Assistant',
      company_name: 'Twitterworks',
      location: 'Motomiya',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 8,
      job_title: 'Project Manager',
      company_name: 'Babbleopia',
      location: 'Sheki',
      description:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    {
      id: 9,
      job_title: 'Marketing Manager',
      company_name: 'Trudeo',
      location: 'Wenci',
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      id: 10,
      job_title: 'Compensation Analyst',
      company_name: 'Riffwire',
      location: 'Rio de Moinhos',
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    },
  ];
}
