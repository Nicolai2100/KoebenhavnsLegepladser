import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-playgrounds',
  templateUrl: './playgrounds.component.html',
  styleUrls: ['./playgrounds.component.css']
})
export class PlaygroundsComponent implements OnInit {
  selectedPlayground;

  constructor() { }

  ngOnInit() {
  }

}
