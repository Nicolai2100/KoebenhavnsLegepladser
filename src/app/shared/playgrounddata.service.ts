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

  constructor(private http: HttpClient) {
    this.playgrounds = this.http.get<IPlayground[]>(this.path)
      .subscribe((response => {
        this.playgrounds = response;
        this.playgrounds.forEach(playground => {
          console.log(playground);
        });
      }));
    this.playgrounds.subscribe(next => {
      localStorage[CACHE_KEY] = JSON.stringify(next);
    });

    this.playgrounds = this.playgrounds.pipe(
      startWith((JSON.parse(localStorage[CACHE_KEY] || '[]')))
    );
  }
}
