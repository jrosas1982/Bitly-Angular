import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  urlProcesada: boolean;
  nombreUrl: string;
  urlShort: string;
  constructor(private _shortUrlService: ShortUrlService) {
    this.urlProcesada = false;
    this.urlShort = '';
    this.nombreUrl = '';
  }

  procesarURL(){
      this.urlProcesada = false;
      this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
      this.urlProcesada = true;
      this.urlShort = data.link;
    });
  }

  ngOnInit(): void {
  }

}
