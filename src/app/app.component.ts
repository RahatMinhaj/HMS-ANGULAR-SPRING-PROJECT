import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HMS';

  rhide!:boolean;
  constructor(private router:Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.rhide=event.url ==='/admin';
      }
    })



  }



  ngOnInit(): void {
   
  }


}
