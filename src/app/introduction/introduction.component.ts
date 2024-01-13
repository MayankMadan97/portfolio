import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})

export class IntroductionComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.animateText();
  }

  animateText() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to('.hide-elem', { y: '0%', duration: 1, delay: 3, stagger: 0.25 });
  }

}
