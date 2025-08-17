import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("nour");
  }
  test(n:any){
    return n;
  }

  test2(n:any){
    const p="aa";
    return p;
  }

}
