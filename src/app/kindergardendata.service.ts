import {Injectable, OnInit} from '@angular/core';
import {KinderGardenModel} from './kindergardendetails/KinderGarden.model';
import {AddressModel} from './kindergardendetails/Address.model';

@Injectable({
  providedIn: 'root'
})
export class KindergardendataService {
  address: AddressModel[];
  kinderGardens: KinderGardenModel[];

  constructor() {
  }


  instaModels() {
    let newGarden = new KinderGardenModel('Tårnlegepladsen');
    const newAdress = new AddressModel();
    newAdress.streetName = 'Frederik V\'s Vej';
    newAdress.streetNumber = 4;
    newAdress.zipCode = 2100;
    newAdress.commune = 'København Ø';
    newGarden.adress = newAdress;
    this.kinderGardens.push(newGarden);

    newGarden = new KinderGardenModel('Vandlegepladsen');
    newAdress.streetName = 'Fælledparken ved Edel Sauntes Allé';
    newAdress.zipCode = 2100;
    newAdress.commune = 'København Ø';
    newGarden.adress = newAdress;
    this.kinderGardens.push(newGarden);
  }

  addKinderGarden(newGarden: KinderGardenModel) {
    this.kinderGardens.push(newGarden);
  }
}
