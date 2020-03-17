import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playground} from '../../../shared/playground.model';

@Component({
  selector: 'app-kindergarden-item',
  templateUrl: './playground-item.component.html',
  styleUrls: ['./playground-item.component.css']
})
export class PlaygroundItemComponent implements OnInit {
  @Input() kinderGarden: Playground;
  name: string;
  // description: string;
  // imagePath: string;
  @Output() kinderGardenSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.kinderGardenSelected.emit();
  }
}
