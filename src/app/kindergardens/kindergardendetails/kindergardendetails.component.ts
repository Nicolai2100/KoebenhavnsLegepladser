import {Component, Input, OnInit} from '@angular/core';
import {KinderGarden} from '../../shared/KinderGarden.model';

@Component({
  selector: 'app-kindergardendetails',
  templateUrl: './kindergardendetails.component.html',
  styleUrls: ['./kindergardendetails.component.css']
})
export class KindergardendetailsComponent implements OnInit {
  @Input() kinderGarden: KinderGarden;
  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

}
