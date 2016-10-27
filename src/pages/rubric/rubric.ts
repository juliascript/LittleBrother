import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-rubric',
  templateUrl: 'rubric.html'
})
export class RubricPage {

    // Doughnut
    public doughnutChartLabels:string[] = ['Elections', 'Transparency', 'Public Safety', 'Health and Social Services', 'Economy', 'Administration', 'Transportation', 'Waste Management'];
    public doughnutChartData:number[] = [73, 78, 95, 63, 73, 62, 91, 36];
    public doughnutChartType:string = 'doughnut';

    // chart data
    public lineChartData:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Category A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Category B'},
      {data: [18, 48, 77, 9, 100, 27, 40], label: 'Category C'}
    ];
    public lineChartLabels:Array<any> = ['Jul', 'Aug', 'Sep', 'Oct'];
    public lineChartType:string = 'line';

    public doughnutChartColors:Array<any> = [
    { // Red
      backgroundColor: ['rgba(196,77,88,0.8)', 'rgba(245,190,53,0.8)', 'rgba(199,244,100,0.8)', 'rgba(78,205,196,0.8)', 'rgba(85,98,112,0.8)', 'rgba(22,193,243,0.8)', 'rgba(145,32,77,0.8)', 'rgba(228,132,74,0.8)'],
      borderColor:  ['rgba(196,77,88,1)', 'rgba(245,190,53,1)', 'rgba(199,244,100,1)', 'rgba(78,205,196,1)', 'rgba(85,98,112,1)', 'rgba(22,193,243,1)', 'rgba(145,32,77,1)', 'rgba(228,132,74,1)'],
      pointBackgroundColor:  ['rgba(196,77,88,1)', 'rgba(245,190,53,1)', 'rgba(199,244,100,1)', 'rgba(78,205,196,1)', 'rgba(85,98,112,1)', 'rgba(22,193,243,1)', 'rgba(145,32,77,1)', 'rgba(228,132,74,1)'],
      pointHoverBorderColor: ['rgba(196,77,88,0.8)', 'rgba(245,190,53,0.8)', 'rgba(199,244,100,0.8)', 'rgba(78,205,196,0.8)', 'rgba(85,98,112,0.8)', 'rgba(22,193,243,0.8)', 'rgba(145,32,77,0.8)', 'rgba(228,132,74,0.8)']
    }];



    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

  constructor(public navCtrl: NavController) {

  }

  public showCategoryPage(rubricItemData:any):void {
    this.navCtrl.push(CategoryPage, { data: rubricItemData });
  }

}
