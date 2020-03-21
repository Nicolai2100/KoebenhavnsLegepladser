import {Component, Input, OnInit} from '@angular/core';
import {Playground} from '../../../shared/playground.model';

@Component({
  selector: 'app-kindergarden-item',
  templateUrl: './playground-item.component.html',
  styleUrls: ['./playground-item.component.css']
})
export class PlaygroundItemComponent implements OnInit {
  @Input() playground: Playground;
  routeName: string;
  constructor() { }

  ngOnInit() {
    this.routeName = this.playground.name.toLocaleLowerCase().replace(/\s/g, '');

  }
}
