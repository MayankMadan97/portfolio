import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experienceData: { title: string, body?: string, link?: string, image: string, footer?: string }[] = [
    {
      title: "Software Engineer",
      image: "../../assets/experience/Dispension.jpeg",
      body: "Dispension Industries",
      footer: "Jan'24 - Present"
    },
    {
      title: "Mitacs Accelarate Intern",
      image: "../../assets/experience/Mitacs.jpg",
      body: "Dalhousie University x Lab2Market x Springboard Atlantic",
      footer: "Aug'23 - Dec'23"
    },
    {
      title: "Teaching Assistant and Marker",
      image: "../../assets/experience/Dal.jpg",
      body: "Dalhousie University",
      footer: "Aug'23 - May'24"
    },
    {
      title: "Sr. Project Engineer",
      image: "../../assets/experience/TCS.jpg",
      body: "Tata Consultancy Services",
      footer: "Jun'19 - Nov'22"
    },
    {
      title: "UX/UI Intern",
      image: "../../assets/experience/Feasopt.jpg",
      body: "Feasopt.AI",
      footer: "May'18 - Jul'18"
    },
    {
      title: "Software Developer Intern",
      image: "../../assets/experience/IDTech.jpg",
      body: "IDTech Solutions Ltd.",
      footer: "May'17 - Jul'17"
    }
  ];

}
