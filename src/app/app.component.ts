import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'tha-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public readonly components: Array<any>;
  public selectedComponent: any;

  constructor() {
    this.components = [
      {
        title: 'Accordion',
        route: '/accordion',
      },
      {
        title: 'Aspect Ratio Images',
        route: '/aspect-ratio-images',
      },
      {
        title: 'Dropdown',
        route: '/dropdown',
      },
    ];
  }

  ngOnInit(): void {
    this.selectedComponent = this.components[0];
  }
}
