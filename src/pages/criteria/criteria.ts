import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { ModalPage } from './modal-page';

@Component({
  selector: 'page-criteria',
  templateUrl: 'criteria.html'
})
export class CriteriaPage {
  item;

  // chart data
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Criteria A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Criteria B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Criteria C'}
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

  public openModal() {
    let modal = this.modalCtrl.create(TakeActionModal);
    modal.present();
  }

  constructor(public params: NavParams, public modalCtrl: ModalController) {
    this.item = params.data.item;
  }

}

@Component({
  selector: 'modal-takeaction',
  templateUrl: 'takeaction.html'
})
export class TakeActionModal {

  constructor(public params: NavParams, public viewCtrl: ViewController) {

  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}
