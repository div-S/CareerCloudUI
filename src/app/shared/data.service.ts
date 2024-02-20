import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  //add job
  addJob(job: Job) {
    job.id = this.afs.createId();
    return this.afs.collection('/jobs').add(job);
  }

  //get all jobs
  getAllJobs() {
    return this.afs.collection('/jobs').snapshotChanges();
  }

  //update job
  updateJob(job: Job) {
    this.deleteJob(job);
    this.addJob(job);
  }

  //delete job
  deleteJob(job: Job) {
    return this.afs.doc('/jobs' + job.id).delete();
  }
}
