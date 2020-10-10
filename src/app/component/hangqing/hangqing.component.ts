import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-hangqing',
  templateUrl: './hangqing.component.html',
  styleUrls: ['./hangqing.component.less']
})
export class HangqingComponent implements OnInit {
  stockList = [];
  constructor(
    public newsService: NewsService,
    public route: ActivatedRoute
  ) { }

  // 10全球  12沪深  13港股 11美股
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      switch (params.key) {
        case 'quanQiu':
          this.newsService.getNewStock(10).then( (res) =>{
            console.log(res.items);
            this.stockList = res.items;
          })
          break;
        case 'huShen':
          this.newsService.getNewStock(10).then( (res) =>{
            console.log(res.items);
            this.stockList = res.items;
          })
          break;
      }
    })


  }

}
