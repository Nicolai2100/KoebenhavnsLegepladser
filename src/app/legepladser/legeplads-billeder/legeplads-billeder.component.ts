import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legeplads-billeder',
  templateUrl: './legeplads-billeder.component.html',
  styleUrls: ['./legeplads-billeder.component.css']
})
export class LegepladsBillederComponent implements OnInit {
  public images;

  constructor() {
  }

  ngOnInit() {
    this.images = ['https://www.naturlegepladser.dk/wp-content/uploads/2015/10/Naturlegeplads_eriksminde_uno_2.jpg',
    'https://www.naturlegepladser.dk/wp-content/uploads/2015/05/P5250693-1024x768.jpg',
      'https://bornibyen.dk/tiny_mce/0003/6891/IMG_6093-001.JPG'];
  }

}
