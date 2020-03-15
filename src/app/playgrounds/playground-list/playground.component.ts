import {Component, OnInit} from '@angular/core';
import {PlaygroundModel} from '../../datamodel/playground.model';
import {playground} from './playground.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  playgroundname: string;
  playground: PlaygroundModel[] = [];


  constructor() {
  }


  ngOnInit() {
    this.playground = [new playground('Eriksminde, Greve', 'Legepladsen er bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg'),

      new playground('Hakkemosen, Taastrup', 'Legepladsen er ikke bemandet',
        'https://www.naturlegepladser.dk/wp-content/uploads/2015/02/image1.jpg'),

      new playground('Mariehøj, Holte', 'Naturlegeplads - ikke bemandet',
        'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg')];
  }

  Search() {
    if (this.playgroundname != '') {

      this.playground = this.playground.filter(search => {
        return search.playground.toLocaleLowerCase().match(this.playgroundname.toLocaleLowerCase());
      });

    } else if (this.playgroundname == '') {
      this.ngOnInit();

    }

  }

}
