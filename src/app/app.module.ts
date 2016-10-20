import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { RubricPage } from '../pages/rubric/rubric';
import { RubricDetailPage } from '../pages/rubric/rubric';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    RubricPage,
    RubricDetailPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RubricPage,
    RubricDetailPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
