import {Component, Input, OnInit} from '@angular/core';
import {Playground} from '../../shared/playground.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PlaygrounddataService} from '../../shared/playgrounddata.service';

@Component({
  selector: 'app-playground-details',
  templateUrl: './playground-details.component.html',
  styleUrls: ['./playground-details.component.css']
})
export class PlaygroundDetailsComponent implements OnInit {
  @Input() playground: Playground;

  // isOpen = false;
  constructor(private route: ActivatedRoute,
              private playgrounddataService: PlaygrounddataService) {
  }

  ngOnInit() {
    // only works for the first initialization
    this.playground = this.playgrounddataService.kinderGardens
      .find(element => element.name.toLocaleLowerCase() === this.route.snapshot.params['name']);

    this.route.params
      .subscribe(
        (params: Params) => {
          this.playground = this.playgrounddataService.kinderGardens
            .find(element => element.name.toLocaleLowerCase() === this.route.snapshot.params['name']);
        }
      );
  }
}
