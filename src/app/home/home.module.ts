import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'courses', 
        loadChildren: () => import('./course-list/course-list.module').then(m => m.CourseListPageModule)
      },
      {
        path: 'about', 
        loadChildren: () => import('./app-info/app-info.module').then(m => m.AppInfoPageModule)
      },
      {
        path: 'lady', 
        loadChildren: () => import('./lady-zee-info/lady-zee-info.module').then(m => m.LadyZeeInfoPageModule)
      },
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
