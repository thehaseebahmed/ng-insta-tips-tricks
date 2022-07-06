import { Component } from '@angular/core';

@Component({
  selector: 'tha-vertical-align',
  templateUrl: './vertical-align.component.html',
  styleUrls: ['./vertical-align.component.css'],
})
export class ThaVerticalAlignComponent {
  private instagramId: string | undefined = "CfniynVDy9q";
  public url: string = this.instagramId
    ? `https://www.instagram.com/p/${this.instagramId}/?utm_source=stackblitz`
    : 'https://www.instagram.com/thasdevlife?utm_source=stackblitz';
}
