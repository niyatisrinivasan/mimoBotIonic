import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkEditPage } from './workedit';

@NgModule({
  declarations: [
    WorkEditPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkEditPage),
  ],
  exports: [
    WorkEditPage
  ]
})
export class WorkeditPageModule {}
