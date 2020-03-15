import {Component, OnInit} from '@angular/core';
import { Playground } from './playground.model';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  playgroundname: string;
  playground: Playground[] = [];


  constructor() {
  }


  ngOnInit() {
    this.playground = [new Playground('Eriksminde, Greve', 'Legepladsen er bemandet',
      'https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg'),

      new Playground('Hakkemosen, Taastrup', 'Legepladsen er ikke bemandet',
        'https://www.naturlegepladser.dk/wp-content/uploads/2015/02/image1.jpg'),

      new Playground('Mariehøj, Holte', 'Naturlegeplads - ikke bemandet',
        'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg')];
  }

  Search() {
    // tslint:disable-next-line:triple-equals
    if (this.playgroundname != '') {

      this.playground = this.playground.filter(search => {
        return search.playground.toLocaleLowerCase().match(this.playgroundname.toLocaleLowerCase());
      });

      // tslint:disable-next-line:triple-equals
    } else if (this.playgroundname == '') {
      this.ngOnInit();

    }

  }

}
