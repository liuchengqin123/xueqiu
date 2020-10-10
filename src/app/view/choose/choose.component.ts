import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.less']
})
export class ChooseComponent implements OnInit {
  industriesList = [];
  areaList = [];
  areas = {};
  tools = [];
  toolsObj = {'基本指标': []};
  currentTab = '基本指标';
  sxList = [];

  constructor(
    public newsService: NewsService,
  ) { }

  async ngOnInit(){
    this.getIndustries();

    this.getAreas();

    this.getTools();

    this.getCStock();

  }

  async getIndustries(){
    let IndResult = await this.newsService.getIndustries();
    // console.log(IndResult);
    this.industriesList = IndResult.industries;
  }
  async getAreas(){
    let AreaResult = await this.newsService.getAreas();
    // console.log(AreaResult.areas);
    this.areaList = Object.keys(AreaResult.areas);
    this.areas = AreaResult.areas;
  }

  async getTools(){
    let toolsResult = await this.newsService.getTools();
    this.tools = Object.keys(toolsResult);
    console.log(toolsResult);
    this.currentTab = this.tools[0];
    this.toolsObj = toolsResult;
  }
  async getCStock(){
    let stocksResult = this.newsService.getCStock({
      params: {
        order_by: 'follow',
        page: 1,
        order: 'desc'
      }
    })
  }

  async checkEvent(item){
    let isContinue = true;
    this.sxList.forEach((sxObj, index) => {
      if(sxObj.field == item.field){
        this.sxList.splice(index,1);
        isContinue = false;
      }
    })

    if(!isContinue){
      return ;
    }
    if(item.adj !== 0){
      item.field = item.field + '.20191231';
    }

    let result = await this.newsService.getFieldRange(item.field);
    console.log(result.data);
    item.min = result.data.min;
    item.max = result.data.max;
    this.sxList.push(item);
  }

  toggleTabs(index){
    this.currentTab = index;
  }




}
