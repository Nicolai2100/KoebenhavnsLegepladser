import {Component, OnInit} from '@angular/core';
import {Workers} from './worker-list/Workes.model';
import {workerService} from './worker-list/worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KoebenhavnsLegepladser';
  }
