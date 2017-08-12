import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import AjaxRequestLib from '../_common/ajaxRequestLib.js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formGroupSignup: FormGroup;
  messageRegister: {} = {dataMes:"",dataBool:false};

  constructor(public router:Router,public formBuilder: FormBuilder) {
  }


  ngOnInit() {

    this.formGroupSignup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null,Validators.required]
    });

  }

  submit(data: any) {
    AjaxRequestLib.postRegister(data.name,data.email,data.password,(message) => {
        if(message){
          this.messageRegister = {dataMes:"Inscription réussie",dataBool:true};
          setTimeout(() => {
            this.router.navigate(['/login']);
          },1000);
        }else{
          this.messageRegister = {dataMes:"Inscription réussie",dataBool:false};
        }
    })
  };

  back(){
    window.history.back();
  }

}
