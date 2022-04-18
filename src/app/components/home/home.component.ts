import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show:boolean = false;
  name:string = '';
  mensaje : string = "Welcome to Game Center";
  

  constructor(@Inject(DOCUMENT) document: any) 
  { 
    this.name = document.location.href;
  }

  ngOnInit(): void {
    this.show = !(this.name.includes('/quiensoy'));
  }

  


}
