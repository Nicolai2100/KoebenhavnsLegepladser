import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground-photos',
  templateUrl: './playground-photos.component.html',
  styleUrls: ['./playground-photos.component.css']
})
export class PlaygroundPhotosComponent implements OnInit {
  public images;

  constructor() {
  }

  ngOnInit() {
    // Billeder fundet her: https://kk.sites.itera.dk/apps/kk_legepladser_ny/index.asp?mode=detalje&id=122
    // tslint:disable-next-line:max-line-length
    this.images = ['http://wp-uploads.interactives.dk/boligcious.dk/uploads/2013/03/01114139/boligcious-design-legeplads-playground-monstrum-play-scapes-taarnlegepladsen2.jpg',
    'https://kk.sites.itera.dk/apps/kk_legepladser_ny/images/stor/lp_29_13.jpg',
      'https://kk.sites.itera.dk/apps/kk_legepladser_ny/images/stor/lp_29_15.jpg'];
  }

}
