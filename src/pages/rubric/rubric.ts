import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-rubric-detail',
  templateUrl: 'rubric-detail.html'
})
export class RubricDetailPage {
  item;

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

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
