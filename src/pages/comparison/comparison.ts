import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Comparison page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comparison',
  templateUrl: 'comparison.html'
})
export class ComparisonPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Comparison Page');
  }

}
