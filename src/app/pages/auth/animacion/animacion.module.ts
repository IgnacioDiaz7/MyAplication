import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionPageRoutingModule } from './animacion-routing.module';

import { AnimacionPage } from './animacion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionPageRoutingModule,
    SharedModule
  ],
  declarations: [AnimacionPage]
})
export class AnimacionPageModule {}
