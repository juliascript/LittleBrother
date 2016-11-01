import { Component } from '@angular/core';

import { RubricPage } from '../rubric/rubric';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { ComparisonPage } from '../comparison/comparison';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RubricPage;
  tab2Root: any = HomePage;
  tab3Root: any = ContactPage;
  tab4Root: any = ComparisonPage;

  constructor() {

  }
}
