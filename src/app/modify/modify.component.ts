import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';

import  AjaxRequestLib  from '../_common/ajaxRequestLib.js';
import * as Cookies from '../../../node_modules/js-cookie';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})

export class ModifyComponent implements OnInit {

  apiKey: string;
  note: any;
  id: number;
  private sub: any;
  private formUpdate: FormGroup;


  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private location: Location) {

    this.formUpdate = this.formBuilder.group({
      title:[null,Validators.required],
      text: [null, Validators.required],
      create_at:[null, Validators.required],
      modified_at:[null, Validators.required],
      status: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.apiKey = (<any>Cookies).get('Auth');
    this.getNote(this.id);

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  public modifyNote(note){
    AjaxRequestLib.putNote(this.apiKey,note.id,note.title,note.text,note.status,(message)=>{
      if(message){
          this.location.back();
      }
    })
  }

  private back(){
    this.location.back();
  }

  private delete(){
    let note = {};
    (<any>note).id = this.id;
    AjaxRequestLib.deleteNote(this.apiKey,note,(message,err)=>{
      if(message.ok){
          this.location.back();
      }
    })
  }

  private getNote(id){
    AjaxRequestLib.getNote(this.apiKey,id,(note) => {
      this.note = note;
      this.formUpdate.patchValue(this.note);
    });
  }
}
