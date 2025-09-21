import { Component, AfterViewInit } from '@angular/core';
import { AtfComponent } from './above-the-fold/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AtfComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 120,
    });
  }
}