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
        title: 'Aspect Ratio Images',
        description: 'This is its description.',
        route: '',
      },
    ];
  }

  ngOnInit(): void {
    this.selectedComponent = this.components[0];
  }
}
