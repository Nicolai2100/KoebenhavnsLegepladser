import {Component, OnInit} from '@angular/core';
import {PlaygrounddataService} from './shared/playgrounddata.service';
import {Playground} from './shared/playground.model';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private playgrounddataService: PlaygrounddataService) {
  }

  ngOnInit(): void {
    this.playgrounddataService.getPlaygrounds();
    this.router.navigate(['legepladser', {}]);
  }

}
