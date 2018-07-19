import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//加入新版的HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//舊版的HttpModule
import { HttpModule } from  '@angular/http';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
