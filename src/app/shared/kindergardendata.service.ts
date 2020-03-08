import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {KinderGarden} from './KinderGarden.model';
import {AddressModel} from './Address.model';
import {Legeplads} from '../legepladser/legeplads.model';

@Injectable({
  providedIn: 'root'
})
export class KindergardendataService {
  // kinderGardens: KinderGardenModel[];

  events1: string[] = [
    'klatring',
    'fodbold'
  ];
  events2: string[] = [
    'vandkamp',
    'stafetløb'
  ];

  address: AddressModel[] = [
    new AddressModel('Frederik V\'s Vej', 4, 2100, 'København Ø'),
    new AddressModel('Fælledparken ved Edel Sauntes Allé', 4, 2100, 'København Ø')
  ];


  kinderGardens: KinderGarden[] = [
    new KinderGarden('Eriksminde',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg',
      this.events1, this.address[0]),
    new KinderGarden('Mariehøj',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg',
      this.events2,
      this.address[1]),
    new KinderGarden('Hakkemosen',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/02/image1.jpg',
      this.events2,
      this.address[1])
  ];

  statusUpdated = new EventEmitter<string>();

  constructor() {
  }

  addKinderGarden(newGarden: KinderGarden) {
    this.kinderGardens.push(newGarden);
  }
}
