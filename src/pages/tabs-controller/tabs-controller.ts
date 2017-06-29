import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListFavoritePage } from '../list-favorite/list-favorite';
import { AddFilmPage } from '../add-film/add-film';
import { OtherPage } from '../other/other';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = ListFavoritePage;
  tab2Root: any = AddFilmPage;
  tab3Root: any = OtherPage;
  constructor(public navCtrl: NavController) {
  }
  
}
