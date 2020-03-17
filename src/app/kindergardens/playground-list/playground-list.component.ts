import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Playground} from '../../shared/playground.model';
import {PlaygrounddataService} from '../../shared/playgrounddata.service';

@Component({
  selector: 'app-kindergarden-list',
  templateUrl: './playground-list.component.html',
  styleUrls: ['./playground-list.component.css']
})
export class PlaygroundListComponent implements OnInit {
  kinderGardens: Playground[];
  playgroundname: string;

  @Output() kinderWasSelected = new EventEmitter<Playground>();

  constructor(private kindergardendataService: PlaygrounddataService) {
  }

  ngOnInit() {
    this.kinderGardens = this.kindergardendataService.kinderGardens;
    this.kindergardendataService.getPlaygrounds();
  }

  onPlaygroundSelected(playgroundSelected: Playground) {
    this.kinderWasSelected.emit(playgroundSelected);
  }

  Search() {
    // tslint:disable-next-line:triple-equals
    if (this.playgroundname != '') {
      this.kinderGardens = this.kinderGardens.filter(search => {
        return search.name.toLocaleLowerCase().match(this.playgroundname.toLocaleLowerCase());
      });

      // tslint:disable-next-line:triple-equals
    } else if (this.playgroundname == '') {
      this.ngOnInit();

    }
  }
}
