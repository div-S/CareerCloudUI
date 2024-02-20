import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from 'src/app/model/job';
import { JobType } from 'src/app/model/job-type';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.scss'],
})
export class CreateNewJobComponent {
  jobForm: FormGroup | any;
  postedMsg: any;
  alreadyposted: any;
  errormsg: any;

  jobList: Job[] = [];
  id: string = '';
  jobRole: string = '';
  expRequired: string = '';
  skills: string = '';
  company: string = '';
  location: string = '';
  jobType: JobType = JobType.All;
  jobDescription: string = '';

  constructor(
    private router: Router,
    private data: DataService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      jobRole: ['', Validators.required],
      expRequired: ['', Validators.required],
      skills: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      jobType: ['All', Validators.required],
      jobDescription: ['', Validators.required],
    });
  }

  addJobListing() {
    if (this.jobForm && this.jobForm.valid) {
      const newJob: Job = {
        id: '',
        jobRole: this.jobForm.value.jobRole,
        expRequired: this.jobForm.value.expRequired,
        skills: this.jobForm.value.skills,
        company: this.jobForm.value.company,
        location: this.jobForm.value.location,
        jobType: this.jobForm.value.jobType as JobType,
        jobDescription: this.jobForm.value.jobDescription,
      };

      this.data.addJob(newJob).then(
        () => {
          console.log('New Job added successfully:', newJob);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Error adding new job:', error);
        }
      );

      console.log('New Job:', newJob);
    }
  }

  logout() {
    this.auth.logout();
  }
}
