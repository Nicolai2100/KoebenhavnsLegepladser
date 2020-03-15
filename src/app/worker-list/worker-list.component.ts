import { Component, OnInit } from '@angular/core';
import {Workers} from './Workes.model';
import {workerService} from './worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  workers: Workers[];

  constructor(private  workerservice: workerService) { }

  ngOnInit() {
    this.workers = this.workerservice.getworkers();
  }

}
