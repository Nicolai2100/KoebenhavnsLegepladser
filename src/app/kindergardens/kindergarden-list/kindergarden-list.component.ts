import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KinderGarden} from '../../shared/KinderGarden.model';
import {KindergardendataService} from '../../shared/kindergardendata.service';

@Component({
  selector: 'app-kindergarden-list',
  templateUrl: './kindergarden-list.component.html',
  styleUrls: ['./kindergarden-list.component.css']
})
export class KindergardenListComponent implements OnInit {
  kinderGardens: KinderGarden[];

  @Output() kinderWasSelected = new EventEmitter<KinderGarden>();

  constructor(private kindergardendataService: KindergardendataService) {
  }

  ngOnInit() {
    this.kinderGardens = this.kindergardendataService.kinderGardens;
  }

  onRecipeSelected(recipeElement: KinderGarden) {
    this.kinderWasSelected.emit(recipeElement);
  }
}
