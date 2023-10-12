import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public navbarItemList = [
    {
      value: 'About',
      link: '#about'
    },
    {
      value: 'Skills',
      link: '#skills'
    },
    {
      value: 'Portfolio',
      link: '#portfolio'
    }
  ];

}
