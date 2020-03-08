import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundsComponent } from './playgrounds/playgrounds.component';
import { PlaygroundListComponent } from './playgrounds/playground-list/playground-list.component';
import { PlaygroundPhotosComponent } from './playgrounds/playground-photos/playground-photos.component';
// husk dette bibliotek: npm install angular-image-slider --save
import {SliderModule} from 'angular-image-slider';
// husk dette bibliotek: npm install angular-bootstrap-md --save
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './searchbar/search.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaygroundsComponent,
    PlaygroundListComponent,
    PlaygroundPhotosComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
