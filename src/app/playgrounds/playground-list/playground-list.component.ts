import {Component, OnInit} from '@angular/core';
import {Playground} from '../../shared/playground.model';
import {PlaygrounddataService} from '../../shared/playgrounddata.service';
import {HttpClient} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';

const CACHE_KEY = 'httpRepoCache';

@Component({
  selector: 'app-playground-list',
  templateUrl: './playground-list.component.html',
  styleUrls: ['./playground-list.component.css']
})
export class PlaygroundListComponent implements OnInit {
  playgrounds: Playground[];
  playgroundname: string;
  isFetching: boolean;
  repos;

  constructor(httpClient: HttpClient, private kindergardendataService: PlaygrounddataService) {
    const path = 'https://api.github.com/search/repositories?q=angular'
    this.repos = httpClient.get<any>(path)
      .pipe(
        map(data => data.items)
      );
    this.repos.subscribe(next => {
      localStorage[CACHE_KEY] = JSON.stringify(next);
    });

    this.repos = this.repos.pipe(
      startWith((JSON.parse(localStorage[CACHE_KEY] || '[]')))
    );
  }


  ngOnInit() {
    this.playgrounds = this.kindergardendataService.playgrounds;
    this.isFetching = this.kindergardendataService.isFetching;
  }

  Search() {
    // tslint:disable-next-line:triple-equals
    if (this.playgroundname != '') {
      this.playgrounds = this.playgrounds.filter(search => {
        return search.name.toLocaleLowerCase().match(this.playgroundname.toLocaleLowerCase());
      });

      // tslint:disable-next-line:triple-equals
    } else if (this.playgroundname == '') {
      this.ngOnInit();

    }
  }
}
