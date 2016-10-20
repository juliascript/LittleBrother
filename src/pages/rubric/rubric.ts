import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-rubric-detail',
  templateUrl: 'rubric-detail.html'
})
export class RubricDetailPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}


@Component({
  selector: 'page-rubric',
  templateUrl: 'rubric.html'
})
export class RubricPage {

  constructor(public navCtrl: NavController) {

  }

  showRubricDetailPage(rubricItemData) {
    this.navCtrl.push(RubricDetailPage, { data: rubricItemData });
  }
  showContactPage() {
    this.navCtrl.push(ContactPage);
  }

}
