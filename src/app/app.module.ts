import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    SkillsComponent,
    CardComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectCardComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
