import { Component } from '@angular/core';
import { Job } from 'src/app/model/job';
import { JobType } from 'src/app/model/job-type';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  jobList: Job[] = [];
  id: string = '';
  jobRole: string = '';
  expRequired: string = '';
  skills: string = '';
  company: string = '';
  location: string = '';
  jobType: JobType = JobType.All;
  jobDescription: string = '';

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllJobListing();
  }

  getAllJobListing() {
    this.data.getAllJobs().subscribe(
      (res) => {
        this.jobList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching the data');
      }
    );
  }

  deleteJobListing(job: Job) {
    if (
      window.confirm('Are you sure you want to delete ' + job.jobRole + '?')
    ) {
      this.data.deleteJob(job);
    }
  }

  logout() {
    this.auth.logout();
  }
}
