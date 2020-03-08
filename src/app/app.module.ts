import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { KindergardendetailsComponent } from './kindergardens/kindergardendetails/kindergardendetails.component';
import { KindergardenItemComponent } from './kindergardens/kindergarden-list_njl/kindergarden-item/kindergarden-item.component';
import { KindergardenListComponent } from './kindergardens/kindergarden-list_njl/kindergarden-list.component';
import { KindergardensComponent } from './kindergardens/kindergardens.component';

const appRoutes: Routes = [
  // {path: '', component: WelcomeComponent},
  // {path: 'game', component: GameComponent},
  // {path: 'highscore', component: HighscoreComponent}
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    KindergardendetailsComponent,
    KindergardenItemComponent,
    KindergardenListComponent,
    KindergardensComponent,
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
