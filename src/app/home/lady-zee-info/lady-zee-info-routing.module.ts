import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LadyZeeInfoPage } from './lady-zee-info.page';

const routes: Routes = [
  {
    path: '',
    component: LadyZeeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LadyZeeInfoPageRoutingModule {}
