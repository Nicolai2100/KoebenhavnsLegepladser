import {EventEmitter, Injectable} from '@angular/core';
import {Playground} from './playground.model';
import {HttpClient} from '@angular/common/http';
import {IPlayground} from './IPlayground';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

const CACHE_KEY = 'httpRepoCache';

@Injectable({
  providedIn: 'root'
})

export class PlaygrounddataService {
  // path = 'http://localhost:8088/rest/playgrounds';
  path = 'http://130.225.170.204:8088/rest/playground_list';
  playgrounds: any;
  statusUpdated = new EventEmitter<string>();

  constructor(private http: HttpClient) {
  }

  getPlaygrounds() {
    this.http.get<IPlayground[]>(this.path)
      .subscribe((response => {
        this.playgrounds = response;
        this.playgrounds.forEach(play => {
          console.log(play);
        });
      }));
    return this.playgrounds;
    this.playgrounds.subscribe(next => {
      localStorage[CACHE_KEY] = JSON.stringify(next);
    });

    this.playgrounds = this.playgrounds.pipe(
      startWith((JSON.parse(localStorage[CACHE_KEY] || '[]')))
    );
  }

  /*getPlaygrounds() {
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
  /*  events1: string[] = [
      'klatring',
      'fodbold'
    ];
    events2: string[] = [
      'vandkamp',
      'stafetløb'
    ];
  */
}
