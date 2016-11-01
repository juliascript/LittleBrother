import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-criteria',
  templateUrl: 'criteria.html'
})
export class CriteriaPage {
  item;

  // chart data
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 48], label: 'Media Policy is Clear and Consistent'}
  ];
  public lineChartLabels:Array<any> = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
  public lineChartType:string = 'line';
  public lineChartLegend:boolean = false;

  public lineChartOptions:any = {
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
                ticks: {
                    beginAtZero:true
                }
        }]
    },
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // coral
      backgroundColor: 'rgba(196,77,88,0.2)',
      borderColor: 'rgba(196,77,88,1)',
      pointBackgroundColor: 'rgba(196,77,88,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(196,77,88,0.8)'
    },
    { // yellow
      backgroundColor: 'rgba(245,190,53,0.2)',
      borderColor: 'rgba(245,190,53,1)',
      pointBackgroundColor: 'rgba(245,190,53,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(245,190,53,1)'
    },
    { // green
      backgroundColor: 'rgba(199,244,100,0.2)',
      borderColor: 'rgba(199,244,100,1)',
      pointBackgroundColor: 'rgba(199,244,100,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(199,244,100,0.8)'
    },
    { // aqua
      backgroundColor: 'rgba(78,205,196,0.2)',
      borderColor: 'rgba(78,205,196,1)',
      pointBackgroundColor: 'rgba(78,205,196,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(78,205,196,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(22,193,243,0.2)',
      borderColor: 'rgba(22,193,243,1)',
      pointBackgroundColor: 'rgba(22,193,243,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(22,193,243,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(85,98,112,0.2)',
      borderColor: 'rgba(85,98,112,1)',
      pointBackgroundColor: 'rgba(85,98,112,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(85,98,112,0.8)'
    },
    { // red
      backgroundColor: 'rgba(145,32,77,0.2)',
      borderColor: 'rgba(145,32,77,1)',
      pointBackgroundColor: 'rgba(145,32,77,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(145,32,77,0.8)'
    },
    { // orange
      backgroundColor: 'rgba(228,132,74,0.2)',
      borderColor: 'rgba(228,132,74,1)',
      pointBackgroundColor: 'rgba(228,132,74,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(228,132,74,0.8)'
    }
  ];

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
