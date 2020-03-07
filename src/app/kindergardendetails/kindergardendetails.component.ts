import {Component, Input, OnInit} from '@angular/core';
import {KinderGardenModel} from '../kindergardendetails/KinderGarden.model';

@Component({
  selector: 'app-kindergardendetails',
  templateUrl: './kindergardendetails.component.html',
  styleUrls: ['./kindergardendetails.component.css']
})
export class KindergardendetailsComponent implements OnInit {
  @Input() kinderGarden: KinderGardenModel;
  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

}
