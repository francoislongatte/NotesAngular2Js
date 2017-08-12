import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'A_noteApp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  public transitionClass:boolean;

  constructor(){

  }


  ngOnInit(){
    function doesFontExist(fontName) {
      // creating our in-memory Canvas element where the magic happens
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");

      // the text whose final pixel size I want to measure
      var text = "abcdefghijklmnopqrstuvwxyz0123456789";

      // specifying the baseline font
      context.font = "72px monospace";

      // checking the size of the baseline text
      var baselineSize = context.measureText(text).width;

      // specifying the font whose existence we want to check
      context.font = "72px '" + fontName + "', monospace";

      // checking the size of the font we want to check
      var newSize = context.measureText(text).width;

      // removing the Canvas element we created
      canvas = null;

      //
      // If the size of the two text instances is the same, the font does not exist because it is being rendered
      // using the default sans-serif font
      //
      if (newSize == baselineSize) {
        return false;
      } else {
        return true;
      }
    }

    window.onload = function(){
      if (!doesFontExist('Source Sans Pro')) {
        var headHTML = document.head.innerHTML;
        headHTML += '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:100,200,400">';
        document.head.innerHTML = headHTML;
      }
    };
  }

  public transition(){
    this.transitionClass = !this.transitionClass;
  }

}
