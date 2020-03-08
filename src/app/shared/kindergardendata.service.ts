import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {KinderGarden} from './KinderGarden.model';
import {AddressModel} from './Address.model';

@Injectable({
  providedIn: 'root'
})
export class KindergardendataService {
  // address: AddressModel[];
   // kinderGardens: KinderGardenModel[];

  kinderGardens = [
    {
      name: 'Master Account',
    },
    {
      name: 'Testaccount',
    },
    {
      name: 'Hidden Account',
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor() {
  }


  instaModels() {
    let newGarden = new KinderGarden('Tårnlegepladsen');
    const newAdress = new AddressModel();
    newAdress.streetName = 'Frederik V\'s Vej';
    newAdress.streetNumber = 4;
    newAdress.zipCode = 2100;
    newAdress.commune = 'København Ø';
    newGarden.adress = newAdress;
    this.kinderGardens.push(newGarden);

    newGarden = new KinderGarden('Vandlegepladsen');
    newAdress.streetName = 'Fælledparken ved Edel Sauntes Allé';
    newAdress.zipCode = 2100;
    newAdress.commune = 'København Ø';
    newGarden.adress = newAdress;
    this.kinderGardens.push(newGarden);
  }

  addKinderGarden(newGarden: KinderGarden) {
    this.kinderGardens.push(newGarden);
  }
}
