import {BrowserModule} from '@angular/platform-browser';
import {SliderModule} from 'angular-image-slider';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// husk dette bibliotek: npm install angular-bootstrap-md --save
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PlaygroundDetailsComponent} from './playgrounds/playground-details/playground-details.component';
import {PlaygroundItemComponent} from './playgrounds/playground-list/playground-item/playground-item.component';
import {PlaygroundListComponent} from './playgrounds/playground-list/playground-list.component';
import {PlaygroundsComponent} from './playgrounds/playgrounds.component';
import {WorkerListComponent} from './worker-list/worker-list.component';
import {WorkerService} from './worker-list/worker.service';
import {PlaygroundPhotosComponent} from './playground-photos/playground-photos.component';
import {EventsComponent} from './events/events.component';

const appRoutes: Routes = [
  {path: 'aktiviteter', component: EventsComponent},
  {path: 'billeder', component: PlaygroundPhotosComponent},
  {path: 'legepladser', component: PlaygroundsComponent, children: [
      {path: ':name', component: PlaygroundDetailsComponent}
    ]
  },
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlaygroundDetailsComponent,
    PlaygroundItemComponent,
    PlaygroundListComponent,
    PlaygroundsComponent,
    WorkerListComponent,
    PlaygroundPhotosComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
