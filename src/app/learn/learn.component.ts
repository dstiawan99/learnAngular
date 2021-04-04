import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { errorMonitor } from 'node:events';

@Component({
  // memanggil componen dengan tag
  // selector: 'app-learn',
  // memanggil componen dengan class
  // selector: '.app-learn',
  // memanggil componen dengan directive
  selector: '[app-learn]',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  public nama = "aku mah apa";
  
  // public getId = "id0321";
  // public disableFalse = false;
  // public disableTrue = true;

  public bold = "textBold";
  public textColor = "blue";
  public error = false;//true;
  public succes = true;//false;
  public messageText = {
    "textBold" : !this.error,
    "error" : this.succes,
    "succes" : !this.error
  }
  public textStyle = {
    "color" : !this.textColor,
    "background" : "green",
    "fontStyle" : "italic"
  }


  // make function
  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    return "Hello "+ this.nama+" apa kabar";
  }
}
