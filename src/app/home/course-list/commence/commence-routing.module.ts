import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommencePage } from './commence.page';

const routes: Routes = [
  {
    path: '',
    component: CommencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommencePageRoutingModule {}
