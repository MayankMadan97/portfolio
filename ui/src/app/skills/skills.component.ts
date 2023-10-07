import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skillDetailList: { title: string, link?: string, imgSrc: string }[] = [
    {
      title: 'HTML 5',
      imgSrc: '../../assets/Skills/html-5.png',
      link: 'https://www.w3schools.com/html/'
    },
    {
      title: 'CSS 3',
      imgSrc: '../../assets/Skills/css-3.png',
      link: 'https://css-tricks.com'
    },
    {
      title: 'JavaScript',
      imgSrc: '../../assets/Skills/js.png',
      link: 'https://javascript.info'
    },
    {
      title: 'TypeScript',
      imgSrc: '../../assets/Skills/typescript.png',
      link: 'https://www.typescriptlang.org'
    },
    {
      title: 'SCSS',
      imgSrc: '../../assets/Skills/SCSS.png',
      link: 'https://sass-lang.com'
    },
    {
      title: 'Bootstrap',
      imgSrc: '../../assets/Skills/bootstrap.png',
      link: 'https://getbootstrap.com'
    },
    {
      title: 'Angular',
      imgSrc: '../../assets/Skills/angular.png',
      link: 'https://angular.io'
    },
    {
      title: 'Java',
      imgSrc: '../../assets/Skills/java.png',
      link: 'https://www.java.com/en/'
    },
    {
      title: 'Spring Boot',
      imgSrc: '../../assets/Skills/spring-boot.png',
      link: 'https://spring.io/projects/spring-boot'
    },
    {
      title: 'JUnit 5',
      imgSrc: '../../assets/Skills/JUnit.png',
      link: 'https://junit.org/junit5/'
    },
    {
      title: 'GraphQL',
      imgSrc: '../../assets/Skills/graphql-icon.png',
      link: 'https://graphql.org'
    },
    {
      title: 'MySQL',
      imgSrc: '../../assets/Skills/mysql.png',
      link: 'https://www.mysql.com'
    },
    {
      title: 'Git',
      imgSrc: '../../assets/Skills/gitlab.png',
      link: 'https://git-scm.com'
    },
    {
      title: 'AWS',
      imgSrc: '../../assets/Skills/AWS.png',
      link: 'https://aws.amazon.com'
    },
    {
      title: 'Docker',
      imgSrc: '../../assets/Skills/docker.png',
      link: 'https://www.docker.com'
    },
    {
      title: 'Jira',
      imgSrc: '../../assets/Skills/jira.png',
      link: 'https://www.atlassian.com/software/jira'
    },
    {
      title: 'RXJS',
      imgSrc: '../../assets/Skills/rxjs.png',
      link: 'https://rxjs.dev'
    },
    {
      title: 'VsCode',
      imgSrc: '../../assets/Skills/vscode.png',
      link: 'https://code.visualstudio.com/api'
    }
  ];

}
