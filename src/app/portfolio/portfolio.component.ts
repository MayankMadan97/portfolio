import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projectData: { id: string, title: string, body?: string, link: string, image: string }[] = [
    {
      id: "proj1",
      title: "Coder Gate",
      link: "https://github.com/MayankMadan97/coder-gate",
      image: "../../assets/projects/codergate.jpg",
      body: "Elevate code quality with our GitHub-integrated intelligent bot."
    },
    {
      id: "proj1",
      title: "Trivia Titans",
      link: "https://github.com/MayankMadan97/TriviaTitans",
      image: "../../assets/projects/trivia-titans.jpg",
      body: "Cloud-based multiplayer trivia fun at your fingertips."
    },
    {
      id: "proj1",
      title: "Newsly",
      link: "https://github.com/MayankMadan97/Newsly",
      image: "../../assets/projects/newsly.jpg",
      body: "Your daily dose of tailored news, delivered straight to you."
    },
    {
      id: "proj1",
      title: "Jsonami",
      link: "https://github.com/MayankMadan97/Jsonami",
      image: "../../assets/projects/jsonami.jpg",
      body: "Simplify massive JSON data with one-stop precision."
    }
  ];

}
