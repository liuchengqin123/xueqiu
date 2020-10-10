import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { ChooseComponent } from './view/choose/choose.component';

import { RecommandComponent } from './component/recommand/recommand.component';
import { DayinfoComponent } from './component/dayinfo/dayinfo.component';
import { TotimePipe } from './pipe/totime.pipe';
import {HangqingComponent} from "./component/hangqing/hangqing.component";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChooseComponent,
    RecommandComponent,
    DayinfoComponent,
    TotimePipe,
    HangqingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
