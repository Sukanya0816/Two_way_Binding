import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() childVar: any;
//  @Output() childout = new EventEmitter();
  constructor() {
   }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    console.log(this.childVar);
  }

}
