import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustomImputComponent } from './components/custom-imput/custom-imput.component';
import { LogoComponent } from './components/logo/logo.component';
import { AnimationComponent } from './components/animation/animation.component';





@NgModule({
  declarations: [
    HeaderComponent,
    CustomImputComponent,
    LogoComponent,
    AnimationComponent
    
  ],
  exports: [
    HeaderComponent,
    CustomImputComponent,
    LogoComponent,
    AnimationComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
