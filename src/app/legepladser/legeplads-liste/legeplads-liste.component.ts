import { Component, OnInit } from '@angular/core';
import { Legeplads } from '../legeplads.model';

@Component({
  selector: 'app-legeplads-liste',
  templateUrl: './legeplads-liste.component.html',
  styleUrls: ['./legeplads-liste.component.css']
})
export class LegepladsListeComponent implements OnInit {
  Legepladser: Legeplads[] = [
    new Legeplads('Eriksminde, Greve', 'Legepladsen er bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg'),

    new Legeplads('Hakkemosen, Taastrup', 'Legepladsen er ikke bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/02/image1.jpg'),

    new Legeplads('Mariehøj, Holte', 'Naturlegeplads - ikke bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
