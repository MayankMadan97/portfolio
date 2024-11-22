import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experienceData: { id: string, title: string, body?: string, link?: string, image: string, footer?: string, desc_on_hover?: string }[] = [
    {
      id: "exp1",
      title: "Software Dev Engineer",
      image: "../../assets/experience/Dispension.jpeg",
      body: "Dispension Industries",
      footer: "Jan'24 - Present"
    },
    {
      id: "exp2",
      title: "Mitacs Accelarate Intern",
      image: "../../assets/experience/Mitacs.jpg",
      body: "Dalhousie University x Lab2Market",
      footer: "Aug'23 - Dec'23"
    },
    {
      id: "exp3",
      title: "Teaching Assistant & Marker",
      image: "../../assets/experience/Dal.jpg",
      body: "Dalhousie University",
      footer: "Aug'23 - May'24"
    },
    {
      id: "exp4",
      title: "Senior Product Engineer",
      image: "../../assets/experience/TCS.jpg",
      body: "Tata Consultancy Services",
      footer: "Jun'19 - Nov'22"
    }
  ];

}
