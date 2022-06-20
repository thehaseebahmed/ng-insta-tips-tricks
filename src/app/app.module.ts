import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThaAspectRatioImagesComponent } from './aspect-ratio-images/aspect-ratio-images.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ThaAspectRatioImagesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
