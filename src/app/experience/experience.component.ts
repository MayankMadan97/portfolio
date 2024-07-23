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
      footer: "Jan'24 - Present",
      desc_on_hover: "Led a team of 5+ developers in the design, development, and maintenance of an AI-powered enterprise sales application for 2 years. Provided mentorship and guidance to team members, fostering professional growth and collaboration. Ensured the quality and reliability of code produced, adapting to various technologies and tech stacks as needed."
    },
    {
      id: "exp2",
      title: "Mitacs Accelarate Intern",
      image: "../../assets/experience/Mitacs.jpg",
      body: "Dalhousie University x Lab2Market",
      footer: "Aug'23 - Dec'23",
      desc_on_hover: "Led a team of 5+ developers in the design, development, and maintenance of an AI-powered enterprise sales application for 2 years. Provided mentorship and guidance to team members, fostering professional growth and collaboration. Ensured the quality and reliability of code produced, adapting to various technologies and tech stacks as needed."
    },
    {
      id: "exp3",
      title: "Teaching Assistant and Marker",
      image: "../../assets/experience/Dal.jpg",
      body: "Dalhousie University",
      footer: "Aug'23 - May'24",
      desc_on_hover: "Led a team of 5+ developers in the design, development, and maintenance of an AI-powered enterprise sales application for 2 years. Provided mentorship and guidance to team members, fostering professional growth and collaboration. Ensured the quality and reliability of code produced, adapting to various technologies and tech stacks as needed."
    },
    {
      id: "exp4",
      title: "Sr. Product Engineer",
      image: "../../assets/experience/TCS.jpg",
      body: "Tata Consultancy Services",
      footer: "Jun'19 - Nov'22",
      desc_on_hover: "Led a team of 5+ developers in the design, development, and maintenance of an AI-powered enterprise sales application for 2 years. Provided mentorship and guidance to team members, fostering professional growth and collaboration. Ensured the quality and reliability of code produced, adapting to various technologies and tech stacks as needed."
    },
    {
      id: "exp5",
      title: "UX/UI Developer Intern",
      image: "../../assets/experience/Feasopt.jpg",
      body: "Feasopt.AI",
      footer: "May'18 - Jul'18",
      desc_on_hover: "Led a team of 5+ developers in the design, development, and maintenance of an AI-powered enterprise sales application for 2 years. Provided mentorship and guidance to team members, fostering professional growth and collaboration. Ensured the quality and reliability of code produced, adapting to various technologies and tech stacks as needed."
    },
    {
      id: "exp6",
      title: "Software Developer Intern",
      image: "../../assets/experience/IDTech.jpg",
      body: "IDTech Solutions Ltd.",
      footer: "May'17 - Jul'17",
      desc_on_hover: "Led a team of 5+ developers in the design, development, and maintenance of an AI-powered enterprise sales application for 2 years. Provided mentorship and guidance to team members, fostering professional growth and collaboration. Ensured the quality and reliability of code produced, adapting to various technologies and tech stacks as needed."
    }
  ];

}
