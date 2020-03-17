import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playground} from '../../../shared/playground.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-kindergarden-item',
  templateUrl: './playground-item.component.html',
  styleUrls: ['./playground-item.component.css']
})
export class PlaygroundItemComponent implements OnInit {
  @Input() playground: Playground;
  name: string;
  // description: string;
  // imagePath: string;
  @Output() kinderGardenSelected = new EventEmitter<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelected() {
    this.kinderGardenSelected.emit();
  }
}
