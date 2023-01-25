import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmurfsComponent } from './smurfs/smurfs.component';

const routes: Routes = [
  { path: 'smurfs', component: SmurfsComponent },
  { path: '', redirectTo: 'smurfs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
