import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() cardDetail?: { id: string, title: string, body?: string, link?: string, image: string, footer?: string, desc_on_hover?: string };

  public hovered: boolean = false;

  mouseOnCard() {
    console.log('hovering'); 
    this.hovered = true;
  }
}
