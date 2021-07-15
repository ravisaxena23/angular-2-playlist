import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle="welcome to home page";
  @Input() ninja;
  @Output() onYell = new EventEmitter();


  fireYellEvent(e){
    this.onYell.emit(e)
  }
  ninjas = {
    name: 'Yoshi',
    belt: 'black'
  }
  alertMe(a) {
    alert(a)
  }
  constructor() { }

  ngOnInit() {
  }

}
