import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegepladserComponent } from './legepladser/legepladser.component';
import { LegepladsListeComponent } from './legepladser/legeplads-liste/legeplads-liste.component';
import { LegepladsBillederComponent } from './legepladser/legeplads-billeder/legeplads-billeder.component';
import {SliderModule} from 'angular-image-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LegepladserComponent,
    LegepladsListeComponent,
    LegepladsBillederComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
