import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/model/job';
import { JobType } from 'src/app/model/job-type';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
})
export class JobListingComponent {
  jobList: Job[] = [];
  filteredJobList: Job[] = [];
  isDropdownActive: boolean = false;
  selectedOption: any;
  options = [
    { name: 'All', value: JobType.All },
    { name: 'Full Stack', value: JobType.FULL_STACK },
    { name: 'Front End', value: JobType.FRONT_END },
    { name: 'Back End', value: JobType.BACK_END },
  ];

  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.getAllJobListing();
    this.filteredJobList = this.jobList;
  }

  getAllJobListing() {
    this.data.getAllJobs().subscribe(
      (res) => {
        this.jobList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
        this.filteredJobList = [...this.jobList];
      },
      (err) => {
        alert('Error while fetching the data');
      }
    );
  }

  filterJobsByType() {
    if (this.selectedOption && this.selectedOption.value !== JobType.All) {
      this.filteredJobList = this.jobList.filter(
        (job) => job.jobType.toString() === this.selectedOption.value.toString()
      );
    } else {
      this.filteredJobList = this.jobList;
    }
  }
}
