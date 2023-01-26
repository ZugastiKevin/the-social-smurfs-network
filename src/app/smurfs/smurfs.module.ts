import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSmurfsComponent } from './list-smurfs/list-smurfs.component';
import { DetailSmurfComponent } from './detail-smurf/detail-smurf.component';



@NgModule({
  declarations: [
    ListSmurfsComponent,
    DetailSmurfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SmurfsModule { }
