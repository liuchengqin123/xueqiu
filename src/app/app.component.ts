import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'xueqiu';
  activeIndex = 1;
  addActive(index): void{
    this.activeIndex = index;
  }
}
