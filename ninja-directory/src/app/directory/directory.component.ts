import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'app/filter.pipe';
// import { Pipe } from '@angular/core';
import { PipeDecorator } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [FilterPipe],
})
export class DirectoryComponent implements OnInit {

  constructor() { }

  term = null;
  ninjas = [
    {
      name: 'yoshi',
      belt: 'black'
    },
    {
      name: 'ryu',
      belt : 'red'
    },
    {
      name : 'crystal',
      belt : 'purple'
    }
  ];
  ngOnInit() {
  }

}
