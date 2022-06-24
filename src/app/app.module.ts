import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThaAspectRatioImagesComponent } from './aspect-ratio-images/aspect-ratio-images.component';
import { ThaAccordionComponent } from './accordion/accordion.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ThaAccordionComponent,
    ThaAspectRatioImagesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
