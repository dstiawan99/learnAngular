import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnAngular';

  // membuat data variabel
  produk = 'taplak meja';
  harga = 12000;
  jml = 5;
}
