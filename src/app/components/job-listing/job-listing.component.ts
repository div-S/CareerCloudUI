import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
})
export class JobListingComponent {
  isDropdownActive = false;
  selectedOption: any;
  options = [
    { name: 'Option 1', value: 'option-1' },
    { name: 'Option 2', value: 'option-2' },
    { name: 'Option 3', value: 'option-3' },
    { name: 'Option 4', value: 'option-4' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
