import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, OnDestroy {
  // Background slider properties
  backgroundImages: string[] = [
    './assets/img/bruno-abatti.jpg',
    './assets/img/antoine-barres.jpg',
    './assets/img/daniel-olahh.jpg',
    './assets/img/daniel-olahs.jpg'
  ];
  currentImageIndex = 0;
  private sliderSubscription?: Subscription;

  ngOnInit() {
    this.startBackgroundSlider();
  }

  ngOnDestroy(): void {
    if (this.sliderSubscription) {
      this.sliderSubscription.unsubscribe();
    }
  }

  private startBackgroundSlider(): void {
    this.sliderSubscription = interval(5000).subscribe(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
    });
  }
}
