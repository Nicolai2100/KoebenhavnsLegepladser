import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KinderGarden} from '../../shared/KinderGarden.model';
import {KindergardendataService} from '../../shared/kindergardendata.service';
import {Playground} from '../../playground/playground.model';

@Component({
  selector: 'app-kindergarden-list',
  templateUrl: './kindergarden-list.component.html',
  styleUrls: ['./kindergarden-list.component.css']
})
export class KindergardenListComponent implements OnInit {
  kinderGardens: KinderGarden[];
  playgroundname: string;

  @Output() kinderWasSelected = new EventEmitter<KinderGarden>();

  constructor(private kindergardendataService: KindergardendataService) {
  }

  ngOnInit() {
    this.kinderGardens = this.kindergardendataService.kinderGardens;
  }

  onPlaygroundSelected(playgroundSelected: KinderGarden) {
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
