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

  // make function


  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    return "Hello "+ this.nama+" apa kabar";
  }
}
