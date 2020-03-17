import {Component, Input, OnInit} from '@angular/core';
import {Playground} from '../../shared/playground.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaygrounddataService} from '../../shared/playgrounddata.service';

@Component({
  selector: 'app-playground-details',
  templateUrl: './playground-details.component.html',
  styleUrls: ['./playground-details.component.css']
})
export class PlaygroundDetailsComponent implements OnInit {
  @Input() playground: Playground;
  // isOpen = false;
  adressStreetStr: string;
  adressCommuneStr: string;

  constructor(private route: ActivatedRoute,
              private playgrounddataService: PlaygrounddataService) {
  }

  ngOnInit() {
    // this.playground = this.playgrounddataService.kinderGardens.find( element => element.name === this.route.snapshot.params[name]);
    console.log(this.playground.name);
    this.adressStreetStr = this.playground.adress.streetName + ' ' +
      +this.playground.adress.streetNumber;
    this.adressCommuneStr =
      this.playground.adress.zipCode + ' ' + this.playground.adress.commune;

  }
}
