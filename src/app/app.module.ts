import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {KinderGardenDetailsComponent} from './kinder-garden-details/kinder-garden-details.component';
import { KindergardendetailsComponent } from './kindergardendetails/kindergardendetails.component';

const appRoutes: Routes = [
  // {path: '', component: WelcomeComponent},
  // {path: 'game', component: GameComponent},
  // {path: 'highscore', component: HighscoreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    KindergardendetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
