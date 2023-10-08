import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projectData: { title: string, body?: string, link: string, image: string }[] = [
    {
      title: "Coder Gate",
      link: "https://github.com/MayankMadan97/coder-gate",
      image: "../../assets/projects/codergate.jpg",
      body: "Intelligent code quality bot for GitHub."
    },
    {
      title: "Trivia Titans",
      link: "https://github.com/MayankMadan97/TriviaTitans",
      image: "../../assets/projects/trivia-titans.jpg",
      body: 'Multiplayer trivia games on the cloud.'
    },
    {
      title: "Newsly",
      link: "https://github.com/MayankMadan97/Newsly",
      image: "../../assets/projects/newsly.jpg",
      body: "Daily personalized newsletter to you."
    },
    {
      title: "Jsonami",
      link: "https://github.com/MayankMadan97/Jsonami",
      image: "../../assets/projects/jsonami.jpg",
      body: 'Last stop to sort out massive json data.'
    }
  ];

}
