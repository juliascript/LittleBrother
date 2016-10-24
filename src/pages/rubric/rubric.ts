import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-rubric',
  templateUrl: 'rubric.html'
})
export class RubricPage {

  constructor(public navCtrl: NavController) {

  }

  showCategoryPage(rubricItemData) {
    this.navCtrl.push(CategoryPage, { data: rubricItemData });
  }

}
