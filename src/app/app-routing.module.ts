import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadernavComponent } from './headernav/headernav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AdduserComponent } from './User/adduser/adduser.component';
import { EdituserComponent } from './User/edituser/edituser.component';
import { ListuserComponent } from './User/listuser/listuser.component';
import { ViewuserComponent } from './User/viewuser/viewuser.component';

const routes: Routes = [
  {
    path:'adduser' , component:AdduserComponent
  },
  {
    path:'listuser' , component:ListuserComponent
  },
  {
    path: 'edituser/:id', component: EdituserComponent
  },
  {
    path:'viewuser/:id' , component:ViewuserComponent
  },
  {
    path:'headernav' , component:HeadernavComponent
  },
  {
    path:'sidebar' , component:SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
