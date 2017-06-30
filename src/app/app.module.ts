import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TrailersPage } from '../pages/trailers/trailers';
import { TrailerPage } from '../pages/trailer/trailer';
import { LoginPage } from '../pages/login/login';
import { FavorisPage } from '../pages/favoris/favoris';
import { PreferencesPage } from '../pages/preferences/preferences';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiTrailerProvider } from '../providers/api-trailer/api-trailer';

@NgModule({
  declarations: [
    MyApp,
    TrailersPage,
    TrailerPage,
    LoginPage,
    FavorisPage,
    PreferencesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrailersPage,
    TrailerPage,
    LoginPage,
    FavorisPage,
    PreferencesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiTrailerProvider
  ]
})
export class AppModule {}