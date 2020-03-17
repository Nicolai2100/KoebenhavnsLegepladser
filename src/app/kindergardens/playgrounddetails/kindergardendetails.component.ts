import {Component, Input, OnInit} from '@angular/core';
import {Playground} from '../../shared/playground.model';

@Component({
  selector: 'app-playgrounddetails',
  templateUrl: './playgrounddetails.component.html',
  styleUrls: ['./playgrounddetails.component.css']
})
export class KindergardendetailsComponent implements OnInit {
  @Input() playground: Playground;
  // isOpen = false;
  adressStreetStr: string;
  adressCommuneStr: string;

  constructor() {
  }

  ngOnInit() {
    this.adressStreetStr = this.playground.adress.streetName + ' ' +
      +this.playground.adress.streetNumber;
    this.adressCommuneStr =
      this.playground.adress.zipCode + ' ' + this.playground.adress.commune;

  }
}
