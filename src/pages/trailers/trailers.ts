import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiTrailerProvider } from '../../providers/api-trailer/api-trailer'
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import _ from 'lodash';
import { TrailerPage } from '../trailer/trailer';

@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html'
})

export class TrailersPage {

  public trailers: any;

  constructor (
    private api: ApiTrailerProvider,
    public navCtrl: NavController,
    platform: Platform
    ) {
  }
  
  ngOnInit() {
    this.api.getTrailers().subscribe(
      trailers => {
        this.trailers = trailers.json();
        this.trailers = _.sortBy(this.trailers, ['title']);
      },
      error => console.log('error Http', error)
    );
  }

  goToTrailer(trailer) {
    if (!trailer) trailer = {};
    this.navCtrl.push(TrailerPage, {
      trailer: trailer
    });
  }
}
