import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {workerService} from './worker-list/worker.service';
import { WorkerListComponent } from './worker-list/worker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [workerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
