import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'app/filter.pipe';
// import { Pipe } from '@angular/core';
import { PipeDecorator } from '@angular/core/src/metadata/directives';
import { LoggingService } from 'app/logging.service';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [FilterPipe, LoggingService,DataService],
})
export class DirectoryComponent implements OnInit {

  constructor( private logger : LoggingService, private dataService: DataService ) { }
  term = null;
  ninjas = [
  ];
  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data)  => this.ninjas = data
    )
  }

}
