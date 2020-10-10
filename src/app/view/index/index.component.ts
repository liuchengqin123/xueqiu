import { Component, OnInit } from '@angular/core';
import axios from 'axios' ;
import { Router} from "@angular/router";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  quoteList = [];
  zhiShuListPosition = {transform: `translate(0px)`};
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    let result = await  axios.get('http://localhost:8080/api/index/quote');
    // console.log(result.data.data.items);
    this.quoteList = result.data.data.items;
  }
  toggleZhiShu(index){
    // console.log(index);
    this.zhiShuListPosition = {transform: `translate(-${index*576}px)`};
  }

  tabEvent(index){
    let pathList = ['/', 'dayInfo'];
    this.router.navigate(['', pathList[index]])
  }

  stockEvent(index){
    let pathList = ['quanQiu','huShen','gangGu','meiGu'];
    this.router.navigate(['', pathList[index]],{
      queryParams:{
        key: pathList[index]
      }
    });
  }
}
