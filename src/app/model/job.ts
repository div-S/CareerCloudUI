import { JobType } from './job-type';

export interface Job {
  id: string;
  jobRole: string;
  expRequired: string;
  skills: string;
  company: string;
  location: string;
  jobType: JobType;
  jobDescription: string;
}
