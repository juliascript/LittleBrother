import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CriteriaPage } from '../criteria/criteria';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  item;

  // chart data
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Category A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Category B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Category C'}
  ];
  public lineChartLabels:Array<any> = ['Jul', 'Aug', 'Sep', 'Oct'];
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.data.item;
  }

  showCriteriaPage(rubricItemData) {
    this.navCtrl.push(CriteriaPage, { data: rubricItemData });
  }

}
