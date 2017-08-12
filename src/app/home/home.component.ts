import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import  AjaxRequestLib  from '../_common/ajaxRequestLib.js';
import * as Cookies from '../../../node_modules/js-cookie';
import * as arrayMove from '../_helper/arrayMove.js';
import * as autoScroll from '../../../node_modules/dom-autoscroller';
import { DragulaService }  from '../../../node_modules/ng2-dragula';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  tabNotes: Array<any>;
  tabParams: any;
  apiKey: string;
  @ViewChild('autoscroll') autoscroll: ElementRef;

  constructor(private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });

  }

  ngOnInit() {
    setTimeout(() => {
      var scroll = autoScroll([
        this.autoscroll.nativeElement
      ],{
        margin: 10,
        maxSpeed: 10,
        scrollWhenOutside: true,
        autoScroll: function(){
          //Only scroll when the pointer is down.
          return this.down;
          //return true;
        }
      });
    },3000);

    this.tabParams = {
      handle: ".draggableSpan",
      animation: 100,
      chosenClass: 'chosen',
      ghostClass: "ghost"
    };



    this.apiKey = (<any>Cookies).get('Auth');
    this.getNotes();

  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
    arrayMove(this.tabNotes);
    AjaxRequestLib.postPositionList(this.apiKey,this.tabNotes);
  }

  public create(note){
    AjaxRequestLib.createNote(this.apiKey,note,(message)=>{
      console.log()
      if(message){
        this.getNotes();
      }
    })
  }

  private getNotes(){
    AjaxRequestLib.getNotes(this.apiKey,(notes) => {
        this.tabNotes = notes;
        this.tabNotes.forEach((notes)=>{
          notes.positionList = parseFloat(notes.positionList);
        });
        console.log(this.tabNotes);
    });
  }

  private delete(event,id){
    event.preventDefault();
    let note = {};
    (<any>note).id = id;
    AjaxRequestLib.deleteNote(this.apiKey,note,(message,err)=>{
      if(message.ok){
        this.getNotes();
      }
    })
  }
}
