import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Playground} from './playground.model';
import {AddressModel} from './address.model';
import {HttpClient} from '@angular/common/http';
import {PlaygroundDum} from './playgroundDum.model';
import {PlaygroundInterface} from './playground.interface';

@Injectable({
  providedIn: 'root'
})

export class PlaygrounddataService {
  // path = 'http://localhost:8088/rest/playgrounds';

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


  kinderGardens: Playground[] = [
    new Playground('Eriksminde',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg',
      this.events1,
      true,
      this.address[0]),
    new Playground('Mariehøj',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg',
      this.events2,
      true,
      this.address[1]),
    new Playground('Hakkemosen',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/02/image1.jpg',
      this.events2,
      false,
      this.address[1])
  ];
  kinderGardensFromDB: PlaygroundDum[];
  // kinderGardens: PlaygroundInterface[];

  statusUpdated = new EventEmitter<string>();

  constructor(private http: HttpClient) {
  }

/*  getPlaygrounds() {
    this.http
      .get<PlaygroundInterface[]>(
        this.path)
      .subscribe(
        response => {
          response.forEach((s: PlaygroundInterface) => {
            console.log(s);
          });
        },
        err => console.log(err));
  }*/

  /*  private getHighScores() {
    console.log('fetching highscores...');
    this.httpClient.get<[]>(
      this.path + 'galgeleg/highscore')
      .subscribe(
        response => {
          response.forEach((s) => {
            this.highScoreList.push(JSON.parse(s));
          });
        },
        err => console.log(err));
  }*/
/*
  addKinderGarden(newGarden: PlaygroundInterface) {
    this.kinderGardens.push(newGarden);
  }*/
}
