import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { errorMonitor } from 'node:events';

@Component({
  // memanggil componen dengan tag
  // selector: 'app-learn',
  // memanggil componen dengan class
  // selector: '.app-learn',
  // memanggil componen dengan directive
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  @Input() public pData;
  @Output() public cData = new EventEmitter();
  public nama = "Samdora";
  public dataNama = ['Anggi','Angga','Anwar','Anissa','Aulya'];
  
  // public getId = "id0321";
  // public disableFalse = false;
  // public disableTrue = true;

  public bold = "textBold";
  public textColor = "biru";
  public error = false;//true;
  public succes = true;//false;
  public displayText = true;
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

  public events = "";

  // make function
  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    return "Hello "+ this.nama+" apa kabar";
  }

  onClick (event){
    console.log(event);
    this.nama;
    this.events = event.timeStamp;
  }

  onSubmit(value){
    console.log(value);
    this.events = value;
  }

  onSend(){
    this.cData.emit("This data Form Learn Component");
  }
}
