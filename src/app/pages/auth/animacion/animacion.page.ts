import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.page.html',
  styleUrls: ['./animacion.page.scss'],
})
export class AnimacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AnimacionPage ngOnInit')
  }

  ngOnDestroy(){
    console.log('AnimacionPage ngOnDestroy')
  }

  ionViewWillEnter(){
    console.log('AnimacionPage ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('AnimacionPage ionViewDidEnter')
  }

  ionViewWillLeave(){
    console.log('AnimacionPage ionViewWillLeave')
  }

  ionViewDidLeave(){
    console.log('AnimacionPage ionViewDidLeave')
  }

}
