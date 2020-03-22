import {Component, OnInit} from '@angular/core';
import {Playground} from '../../shared/playground.model';
import {PlaygrounddataService} from '../../shared/playgrounddata.service';
import {HttpClient} from '@angular/common/http';
import {map, startWith} from 'rxjs/operators';
import {IPlayground} from '../../shared/IPlayground';

const CACHE_KEY = 'httpRepoCache';

@Component({
  selector: 'app-playground-list',
  templateUrl: './playground-list.component.html',
  styleUrls: ['./playground-list.component.css']
})
export class PlaygroundListComponent implements OnInit {
  playgrounds: Playground[];
  playgroundname: string;

  constructor(httpClient: HttpClient, private playgrounddataService: PlaygrounddataService) {
  }

  ngOnInit() {
    this.playgrounds = this.playgrounddataService.getPlaygrounds();
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
