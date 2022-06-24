import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThaAspectRatioImagesComponent } from './aspect-ratio-images/aspect-ratio-images.component';
import { ThaAccordionComponent } from './accordion/accordion.component';
import { AppRoutingModule } from './app-routing.module';
import { ThaDropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ThaAccordionComponent,
    ThaAspectRatioImagesComponent,
    ThaDropdownComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
