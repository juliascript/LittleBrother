import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-rubric',
  templateUrl: 'rubric.html'
})
export class RubricPage {

  constructor(public navCtrl: NavController) {

  }

  showContactPage() {
    this.navCtrl.push(ContactPage);
  }

}
