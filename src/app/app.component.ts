import {Component} from '@angular/core';
import {KindergardendataService} from './shared/kindergardendata.service';
import {KinderGarden} from './shared/KinderGarden.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KoebenhavnsLegepladser';
  kinderGardens = this.kindergardendataService.kinderGardens;

  constructor(private kindergardendataService: KindergardendataService) {
  }

  onKinderGardenSelected(kinderGardenItem: KinderGarden) {

  }
}
