import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }

 doConfirm() {
   let confirm = this.alerCtrl.create({
     title: 'Turn on Your Location?',
     message: 'Do you agree to use your location to use this app?',
     buttons: [
       {
         text: 'Disagree',
         handler: () => {
           console.log('Disagree clicked');
         }
       },
       {
         text: 'Agree',
         handler: () => {
           console.log('Agree clicked');
         }
       }
     ]
   });
   confirm.present()
 }

}
