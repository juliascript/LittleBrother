import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { RubricPage } from '../pages/rubric/rubric';
import { CategoryPage } from '../pages/category/category';
import { CriteriaPage } from '../pages/criteria/criteria';
import { ContactPage } from '../pages/contact/contact';
import { ComparisonPage } from '../pages/comparison/comparison';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TakeActionModal } from '../pages/criteria/criteria';
import { CitiesModal } from '../pages/rubric/rubric';

import {ChartsModule} from "ng2-charts/components/charts/charts";
// an incredibly stupid hack just to get charts properly loaded into tooling...
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';

@NgModule({
  declarations: [
    MyApp,
    RubricPage,
    CategoryPage,
    CriteriaPage,
    ContactPage,
    ComparisonPage,
    HomePage,
    TabsPage,
    TakeActionModal,
    CitiesModal
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RubricPage,
    CategoryPage,
    CriteriaPage,
    ContactPage,
    ComparisonPage,
    HomePage,
    TabsPage,
    TakeActionModal,
    CitiesModal
  ],
  providers: []
})
export class AppModule {}
