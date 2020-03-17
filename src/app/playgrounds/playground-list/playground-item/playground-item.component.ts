import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
}
