import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

  achievements = [ 
    {
      "title" : "Mitacs x Dispension Funding Grant",
      "body" : "Secured a $15K grant for the research project 'Subsystem Optimization of Intelligent Automated Distribution Kiosk,' focused on developing a code quality assurance framework to support the startup ecosystem."
    },
    {
      "title" : "Mitacs Lab2Market Validate Funding Grant",
      "body" : "Secured a $15K grant for the research project 'Exploring Chasms in Modern Software Development Quality Assurance: Unveiling the Rift,' aiming to validate the product-market fit for a AI powered code quality tool through customer discovery interviews."
    },
    {
      "title" : "Best Team Award",
      "body" : "Applied model driven engineering concepts of domain of experience and enabled intent driven low-code Intelligent digital experiences."
    },
    {
      "title" : "Persuit of Excellence Award",
      "body" : "Architected a No Code progressive web app generation engine leveraging app shell architecture."
    },
    {
      "title" : "Star of the Month Award",
      "body" : "Built digital offering store with product ingestion pipelines presented at TCS Blitz'19 Duabi."
    }
  ];
}
