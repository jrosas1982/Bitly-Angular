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
  msjError: string;
  loading: boolean;
  mostraError: boolean;
  constructor(private _shortUrlService: ShortUrlService) {
    this.urlProcesada = false;
    this.urlShort = '';
    this.nombreUrl = '';
    this.msjError = '';
    this.loading = false;
    this.mostraError = false;

  }
  procesarURL() {
    if (this.nombreUrl === '') {
      this.error("Ingrese una url");
    }
    this.loading = true;
    this.urlProcesada = false;
    setTimeout(() => { this.getShortUrl() }, 2000);
  }

  getShortUrl() {
    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
      this.urlProcesada = true;
      this.urlShort = data.link;
      this.loading = false;
    }, error => {
      if (error.error.description === 'The value provided is invalid.')
        this.error("formato de Url invalida");
    });
  }
  error(valor: string) {
    this.mostraError = true;
    this.msjError = valor;
    setTimeout(() => {
      this.mostraError = false;
      this.loading = false;
      this.nombreUrl ='';
    }, 2000);
  }
  ngOnInit(): void {
  }

}
