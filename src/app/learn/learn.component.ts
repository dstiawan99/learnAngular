import { Component, OnInit } from '@angular/core';

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
  public getId = "id0321";
  public disableFalse = false;
  public disableTrue = true;

  // make function


  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    return "Hello "+ this.nama+" apa kabar";
  }
}
