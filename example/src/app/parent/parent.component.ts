import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentVar = 'hello child';
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}

