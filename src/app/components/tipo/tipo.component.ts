import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  link: string;
  isSelect: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setLink(url: string): void {
    this.link = url;
    console.log(this.link);
  }

  onFocus(e) {
    this.isSelect = false;
    console.log('estoy fuqueado');
  }

  onBlur(e) {
  }

}
