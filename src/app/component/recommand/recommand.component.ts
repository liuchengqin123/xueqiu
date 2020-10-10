import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../service/news.service";




@Component({
  selector: 'app-recommand',
  templateUrl: './recommand.component.html',
  styleUrls: ['./recommand.component.less']
})
export class RecommandComponent implements OnInit {
  recommand = [];
  constructor(
    public newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsService.getRecommand().then((res) =>{

      this.recommand = res.items;
    });
  }


}
