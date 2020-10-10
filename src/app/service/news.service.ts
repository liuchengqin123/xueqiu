import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  host = 'http://localhost:8080';
  constructor() { }

  async getRecommand(){
    let httpUrl = this.host + '/api/index/news1';
    let result = await axios.get(httpUrl);
    // console.log(result.data);
    return result.data;
  }

  async getDayInfo(){
    let httpUrl = this.host + '/api/index/news2';
    let result =  await axios.get(httpUrl);
    return result.data;
  }

  async getNewStock(index: number){
    // 10全球  12沪深  13港股 11美股
    let httpUrl = this.host + `/api/index/hotStock?_type=${index}&type=${index}`;
    let result = await axios.get(httpUrl);
    // console.log(result.data.data);
    return result.data.data;
  }

  //获取行业
  async getIndustries(){
    let httpUrl = this.host + `/api/choose/industries`;
    let result = await axios.get(httpUrl);
    // console.log(result.data.data);
    return result.data.data;
  }

  //获取地域
  async getAreas(){
    let httpUrl = this.host + `/api/choose/areas`;
    let result = await axios.get(httpUrl);
    // console.log(result.data.data);
    return result.data.data;
  }

  // 获取条件股票
  async  getCStock(options){
    let httpUrl = this.host + `/api/choose/stocks`;
    let result = await axios.get(httpUrl, {
      params: options
    });
    return result.data;
  }

  // 获取筛选工具
  async getTools(){
    let httpUrl =  this.host + `/api/choose/tools`;
    let result = await axios.get(httpUrl);
    // console.log(result.data);
    return result.data;
  }

  // 字段范围
  async getFieldRange(field){
    let httpUrl = this.host + `/api/choose/range?field=${field}`;
    let result = await axios.get(httpUrl);
    console.log(result.data);
    return  result.data;
  }
}
