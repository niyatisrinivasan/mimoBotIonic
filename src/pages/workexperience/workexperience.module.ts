import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkexperiencePage } from './workexperience';

@NgModule({
  declarations: [
    WorkexperiencePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkexperiencePage),
  ],
  exports: [
    WorkexperiencePage
  ]
})
export class WorkexperiencePageModule {}
