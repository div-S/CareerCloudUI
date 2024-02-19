import { JobType } from './job-type';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: JobType;
  description: string;
}
