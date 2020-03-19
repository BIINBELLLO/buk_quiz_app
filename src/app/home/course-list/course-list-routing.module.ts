import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListPage } from './course-list.page';

const routes: Routes = [
  {
    path: '',
    component: CourseListPage
  },
  {
    path: ':id', 
    loadChildren: () => import('../course-list/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: ':id/commence/:id', 
    loadChildren: () => import('../course-list/commence/commence.module').then(m => m.CommencePageModule)
  },
  {
    path: ':id/commence/:id/result',
    loadChildren: () => import('../course-list/result/result.module').then(m => m.ResultPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseListPageRoutingModule {}
