import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSmurfsComponent } from './list-smurfs/list-smurfs.component';
import { DetailSmurfComponent } from './detail-smurf/detail-smurf.component';
import { RouterModule, Routes } from '@angular/router';

const smurfsRoutes: Routes = [
  { path: 'smurfs', component: ListSmurfsComponent },
  { path: 'smurf/:id', component: DetailSmurfComponent },
];

@NgModule({
  declarations: [
    ListSmurfsComponent,
    DetailSmurfComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(smurfsRoutes),
  ]
})
export class SmurfsModule { }
