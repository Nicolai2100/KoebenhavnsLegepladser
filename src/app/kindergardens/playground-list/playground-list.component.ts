import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Playground} from '../../shared/playground.model';
import {PlaygrounddataService} from '../../shared/playgrounddata.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-kindergarden-list',
  templateUrl: './playground-list.component.html',
  styleUrls: ['./playground-list.component.css']
})
export class PlaygroundListComponent implements OnInit {
  playgrounds: Playground[];
  playgroundname: string;

  @Output() playgroundWasSelected = new EventEmitter<Playground>();

  constructor(private kindergardendataService: PlaygrounddataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.playgrounds = this.kindergardendataService.kinderGardens;
   // this.kindergardendataService.getPlaygrounds();
  }

  onPlaygroundSelected(playgroundSelected: Playground) {
    this.playgroundWasSelected.emit(playgroundSelected);
    // todo this.route.snapshot.params.id;
   // this.router.navigate(['legepladser', {relativeTo: this.route}]);

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
