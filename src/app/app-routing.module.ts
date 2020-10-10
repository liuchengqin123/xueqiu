import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChooseComponent} from "./view/choose/choose.component";
import {IndexComponent} from "./view/index/index.component";
import {RecommandComponent} from "./component/recommand/recommand.component";
import {DayinfoComponent} from "./component/dayinfo/dayinfo.component";
import {HangqingComponent} from "./component/hangqing/hangqing.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: RecommandComponent,
      },
      {
        path: 'dayInfo',
        component: DayinfoComponent,
      },
      {
        path: 'quanQiu',
        component: HangqingComponent,
      },
      {
        path: 'huShen',
        component:HangqingComponent,
      },
      {
        path: 'gangGu',
        component: HangqingComponent,
      },
      {
        path: 'meiGu',
        component: HangqingComponent,
      }
    ],
  },
  {
    path: 'screener',
    component: ChooseComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
