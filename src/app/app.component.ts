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
  // membuat objeck
  pelanggan = {nama : 'Diana',umur : 25, alamat:'malang'};
  // membuat array
  nomorAcak = [2,3,5,45,23,211,64,86,424,54];
}
