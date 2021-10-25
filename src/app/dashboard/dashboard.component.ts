import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  logo = 'HYCUBE';
  name = 'Nouman Ishtiaq';
  designation = 'Junior Developer';
  user:any = {}
  @ViewChild('drawer') drawer:any
  constructor() {}

  toggle(){
    console.log(this.drawer)
    this.drawer?.toggle()
  }
  ngOnInit(): void {
    console.log(history.state)
    this.user=history.state
  }
}
