import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThaAccordionComponent } from './accordion/accordion.component';
import { AppComponent } from './app.component';
import { ThaAspectRatioImagesComponent } from './aspect-ratio-images/aspect-ratio-images.component';
import { ThaDropdownComponent } from './dropdown/dropdown.component';

export const routes: Routes = [
  { path: 'accordion', component: ThaAccordionComponent },
  { path: 'aspect-ratio-images', component: ThaAspectRatioImagesComponent },
  { path: 'dropdown', component: ThaDropdownComponent },
  { path: '', redirectTo: '/accordion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
