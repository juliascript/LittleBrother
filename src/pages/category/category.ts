import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CriteriaPage } from '../criteria/criteria';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  item;

  //bar chart data
  public barChartOptions:any = {
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
  public barChartLabels:string[] = ['Accessible, Current, Clear, and Consistent', 'Protects Fundamental Free Speech', 'Safeguards Against Abuse', 'Consistent with Legal Requirements', 'Promotes Openness and Timeliness', 'Disclosure of Misconduct and Resolution of Disputes'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [83,60,52,76,56,84], label: 'Aspects'}
  ];

  public barChartColors:Array<any> = [
  {
    backgroundColor: ['rgba(196,77,88,0.8)', 'rgba(245,190,53,0.8)', 'rgba(199,244,100,0.8)', 'rgba(78,205,196,0.8)', 'rgba(85,98,112,0.8)', 'rgba(22,193,243,0.8)', 'rgba(145,32,77,0.8)', 'rgba(228,132,74,0.8)'],
    borderColor:  ['rgba(196,77,88,1)', 'rgba(245,190,53,1)', 'rgba(199,244,100,1)', 'rgba(78,205,196,1)', 'rgba(85,98,112,1)', 'rgba(22,193,243,1)', 'rgba(145,32,77,1)', 'rgba(228,132,74,1)'],
    pointBackgroundColor:  ['rgba(196,77,88,1)', 'rgba(245,190,53,1)', 'rgba(199,244,100,1)', 'rgba(78,205,196,1)', 'rgba(85,98,112,1)', 'rgba(22,193,243,1)', 'rgba(145,32,77,1)', 'rgba(228,132,74,1)'],
    pointHoverBorderColor: ['rgba(196,77,88,0.8)', 'rgba(245,190,53,0.8)', 'rgba(199,244,100,0.8)', 'rgba(78,205,196,0.8)', 'rgba(85,98,112,0.8)', 'rgba(22,193,243,0.8)', 'rgba(145,32,77,0.8)', 'rgba(228,132,74,0.8)']
    }
  ];

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

  public showCriteriaPage(rubricItemData:any) {
    this.navCtrl.push(CriteriaPage, { data: rubricItemData });
  }

}
