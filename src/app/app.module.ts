import {BrowserModule} from '@angular/platform-browser';
import {SliderModule} from 'angular-image-slider';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LegepladserComponent } from './legepladser/legepladser.component';
import { LegepladsListeComponent } from './legepladser/legeplads-liste/legeplads-liste.component';
import { LegepladsBillederComponent } from './legepladser/legeplads-billeder/legeplads-billeder.component';
// husk dette bibliotek: npm install angular-image-slider --save
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { KindergardendetailsComponent } from './kindergardens/kindergardendetails/kindergardendetails.component';
import { KindergardenItemComponent } from './kindergardens/kindergarden-list_njl/kindergarden-item/kindergarden-item.component';
import { KindergardenListComponent } from './kindergardens/kindergarden-list_njl/kindergarden-list.component';
import { KindergardensComponent } from './kindergardens/kindergardens.component';
import { WorkerListComponent} from './worker-list/worker-list.component';
import {workerService} from './worker-list/worker.service';

const appRoutes: Routes = [
  // {path: '', component: WelcomeComponent},
  // {path: 'game', component: GameComponent},
  // {path: 'highscore', component: HighscoreComponent}
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LegepladserComponent,
    LegepladsListeComponent,
    LegepladsBillederComponent,
    HeaderComponent,
    FooterComponent,
    KindergardendetailsComponent,
    KindergardenItemComponent,
    KindergardenListComponent,
    KindergardensComponent,
    WorkerListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [workerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
