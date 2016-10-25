import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

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
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

  constructor(public navCtrl: NavController) {

  }

  showCategoryPage(rubricItemData) {
    this.navCtrl.push(CategoryPage, { data: rubricItemData });
  }

}
