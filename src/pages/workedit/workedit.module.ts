import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkeditPage } from './workedit';

@NgModule({
  declarations: [
    WorkeditPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkeditPage),
  ],
  exports: [
    WorkeditPage
  ]
})
export class WorkeditPageModule {}
