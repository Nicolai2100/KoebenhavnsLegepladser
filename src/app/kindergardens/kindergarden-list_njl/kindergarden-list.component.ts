import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KinderGarden} from '../../shared/KinderGarden.model';

@Component({
  selector: 'app-kindergarden-list',
  templateUrl: './kindergarden-list.component.html',
  styleUrls: ['./kindergarden-list.component.css']
})
export class KindergardenListComponent implements OnInit {
  kinderGardens: KinderGarden[] = [
    new KinderGarden('A Test Garden 1'),
    new KinderGarden('A Test Garden 2')
  ];
  @Output() kinderWasSelected = new EventEmitter<KinderGarden>()

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeElement: KinderGarden) {
    this.kinderWasSelected.emit(recipeElement);
  }
}
