import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})

export class TrailerPage {

  public trailer: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.trailer = navParams.get('trailer')
      console.log(this.trailer)
  }
  
}
