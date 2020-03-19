import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LadyZeeInfoPageRoutingModule } from './lady-zee-info-routing.module';

import { LadyZeeInfoPage } from './lady-zee-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LadyZeeInfoPageRoutingModule
  ],
  declarations: [LadyZeeInfoPage]
})
export class LadyZeeInfoPageModule {}
