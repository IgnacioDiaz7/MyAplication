import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('',),
  })  
  
    constructor() { }
  
    ngOnInit() {
      console.log('SignUpPage ngOnInit')
      this.confirmPasswordValidator()
    }

    ngOnDestroy(){
      console.log('SignUpPage ngOnDestroy')
    }

    ionViewWillEnter(){
      console.log('SignUpPage ionViewWillEnter')
    }

    ionViewDidEnter(){
      console.log('SignUpPage ionViewDidEnter')
    }

    ionViewWillLeave(){
      console.log('SignUpPage ionViewWillLeave')
    }

    ionViewDidLeave(){
      console.log('SignUpPage ionViewDidLeave')
    }

    confirmPasswordValidator(){
      this.form.controls.confirmPassword.setValidators([
        Validators.required,
        customValidators.matchValues(this.form.controls.password)
      ])

      this.form.controls.confirmPassword.updateValueAndValidity();
    }
  
    submit(){
      if(this.form.valid){
  
        console.log(this.form.value)
      }
    }
  
  }
