import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MyPageComponent } from './my-page/my-page.component';
import { MyPage2Component } from './my-page2/my-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    MyPageComponent,
    MyPage2Component
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    MyPageComponent,
    MyPage2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
