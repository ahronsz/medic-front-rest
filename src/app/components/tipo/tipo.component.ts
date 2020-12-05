import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  link: string;

  constructor() { }

  ngOnInit(): void {
  }

  setLink(url: string): void {
    this.link = url;
    console.log(this.link);
  }

}
