import { Component } from '@angular/core';

@Component({
  selector: 'tha-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
})
export class ThaFlipCardComponent {
  private instagramId: string | undefined = undefined;
  public url: string = this.instagramId
    ? `https://www.instagram.com/p/${this.instagramId}/?utm_source=stackblitz`
    : 'https://www.instagram.com/thasdevlife?utm_source=stackblitz';
}
