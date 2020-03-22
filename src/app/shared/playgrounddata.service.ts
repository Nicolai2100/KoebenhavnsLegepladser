import {EventEmitter, Injectable} from '@angular/core';
import {Playground} from './playground.model';
import {HttpClient} from '@angular/common/http';
import {PlaygroundInterface} from './playground.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlaygrounddataService {
  // path = 'http://localhost:8088/rest/playgrounds';
  path = 'http://130.225.170.204:8088/rest/playground_list';

  events1: string[] = [
    'klatring',
    'fodbold'
  ];
  events2: string[] = [
    'vandkamp',
    'stafetløb'
  ];

  playgrounds: Playground[];
  /* kinderGardens: Playground[] = [
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

      )
  ]; */

  statusUpdated = new EventEmitter<string>();
  isFetching = false;

  constructor(private http: HttpClient) {
    this.getPlaygrounds();
  }

  getPlaygrounds() {
    this.isFetching = true;
    this.http
      .get(this.path)
      .pipe(
        map(response => {
          const playgroundArray = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              playgroundArray.push({...response[key], id: key});
            }
          }
          this.playgrounds = playgroundArray;
        })
      )
      .subscribe(playground => {
        console.log(playground);
        this.isFetching = false;
      });
  }


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
