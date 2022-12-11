import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { AdduserComponent } from './User/adduser/adduser.component';
import { ListuserComponent } from './User/listuser/listuser.component';
import { ViewuserComponent } from './User/viewuser/viewuser.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './User/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ListuserComponent,
    ViewuserComponent,
    HeadernavComponent,
    SidebarComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
