import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { matDrawerAnimations } from '@angular/material/sidenav';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
})
export class TopnavComponent implements OnInit {
  leng = '1';
  @Input() valu:any
  @Output() event = new EventEmitter()
  @Input() profilePic:any
  constructor() {}
togglesidenav($event:any){
console.log(this.valu)
this.event.emit()
console.log(this.event.emit($event))
}
  ngOnInit(): void {}
}
