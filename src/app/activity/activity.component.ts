import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activities: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getUserActivity().subscribe(
      (data) => {
        this.activities = data.slice(0, 10); // Get the top 10 activities
        console.log(this.activities);
      },
      (error) => {
        console.error('Error fetching GitHub activity:', error);
      }
    );
  }
}
