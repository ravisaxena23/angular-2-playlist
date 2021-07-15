import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  name = 'ninja';
  ninja = {
    name: 'ryu',
    belt: 'red'
  }

  yell(e){
    alert('I am yelling')
  }
}
