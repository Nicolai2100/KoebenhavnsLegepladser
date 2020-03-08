import { Component, OnInit } from '@angular/core';
import { playground } from '../playground.model';

@Component({
  selector: 'app-playground-list',
  templateUrl: './playground-list.component.html',
  styleUrls: ['./playground-list.component.css']
})
export class PlaygroundListComponent implements OnInit {
  Playgrounds: playground[] = [
    new playground('Eriksminde, Greve', 'Legepladsen er bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg'),

    new playground('Hakkemosen, Taastrup', 'Legepladsen er ikke bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/02/image1.jpg'),

    new playground('Mariehøj, Holte', 'Naturlegeplads - ikke bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
