import { Component, OnInit } from '@angular/core';
import { NewsService} from "../../service/news.service";
@Component({
  selector: 'app-dayinfo',
  templateUrl: './dayinfo.component.html',
  styleUrls: ['./dayinfo.component.less']
})
export class DayinfoComponent implements OnInit {
  DayInfo = [];
  currentTime = new Date();


  constructor(
    public newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsService.getDayInfo().then((res) =>{
      console.log(res.items);
      this.DayInfo = res.items;
    })
  }

}
