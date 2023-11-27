
export interface Job {
  id: number;
  job_title: string;
  job_type: string;
  company_name: string;
  location: string;
  description: string;
  date_posted: string;
  job_category: string;
}

interface JobState {
  jobs: Job[];
  filter: any;
  sort: any;
}

export interface AppState {
  job: JobState;
}