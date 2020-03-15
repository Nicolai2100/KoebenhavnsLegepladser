import {BrowserModule} from '@angular/platform-browser';
import {SliderModule} from 'angular-image-slider';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
// husk dette bibliotek: npm install angular-bootstrap-md --save
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { KindergardendetailsComponent } from './kindergardens/kindergardendetails/kindergardendetails.component';
import { KindergardenItemComponent } from './kindergardens/kindergarden-list/kindergarden-item/kindergarden-item.component';
import { KindergardenListComponent } from './kindergardens/kindergarden-list/kindergarden-list.component';
import { KindergardensComponent } from './kindergardens/kindergardens.component';
import { WorkerListComponent} from './worker-list/worker-list.component';
import {workerService} from './worker-list/worker.service';
import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundPhotosComponent } from './playground/playground-photos/playground-photos.component';

const appRoutes: Routes = [
  // {path: '', component: WelcomeComponent},
  // {path: 'game', component: GameComponent},
  // {path: 'highscore', component: HighscoreComponent}
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KindergardendetailsComponent,
    KindergardenItemComponent,
    KindergardenListComponent,
    KindergardensComponent,
    WorkerListComponent,
    PlaygroundComponent,
    PlaygroundPhotosComponent,
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
  providers: [workerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
