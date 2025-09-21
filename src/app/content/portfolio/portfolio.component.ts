import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './portfolio.component.scss',
    './portfolio.responsive.component.scss',
  ],
})
export class PortfolioComponent {
  private readonly AOS_DEFAULT_OFFSET = 600;
  public aosBaseDelay = 300;
  public aosDuration = 400;
  public aosAnchorOffset = this.AOS_DEFAULT_OFFSET;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const width = (event.target as Window).innerWidth;
    this.setAnchorOffset(width);
    AOS.refresh();
  }

  private setAnchorOffset(width: number): void {
    this.aosAnchorOffset = width < 1000 ? 0 : this.AOS_DEFAULT_OFFSET;
  }
}
