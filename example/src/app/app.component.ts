import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date = new Date(Date.now())
  startDate = new Date('2017/12/01');

  endDate = new Date(Date.parse('2017/12/31'));

}
