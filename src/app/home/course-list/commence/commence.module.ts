import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommencePageRoutingModule } from './commence-routing.module';

import { CommencePage } from './commence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommencePageRoutingModule
  ],
  declarations: [CommencePage]
})
export class CommencePageModule {}
