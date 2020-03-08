import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KinderGarden} from '../../../shared/KinderGarden.model';

@Component({
  selector: 'app-kindergarden-item',
  templateUrl: './kindergarden-item.component.html',
  styleUrls: ['./kindergarden-item.component.css']
})
export class KindergardenItemComponent implements OnInit {
  @Input() kinderGarden: KinderGarden;
  name: string;
  description: string;
  imagePath: string;
  @Output() kinderGardenSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.kinderGardenSelected.emit();
  }
}
