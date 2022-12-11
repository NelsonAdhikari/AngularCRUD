

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  users:User[]=[]

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  public getUser(){
    this.service.listAllUsers().subscribe((data:any)=>{
      this.users=data.users;
    });
  }

  onDelete(id: any){
    this.service.deleteUserById(id).subscribe(
      {
        next: (response: any) => {
          this.getUser();
        }, error: (ree:any) =>{
          console.log('unable to delete user');
        }
      }
    );
  }

  onClickEdit(id: any){
    this.router.navigate(['/edituser', id]);
  }
  
  onClickView(id: any){
    this.router.navigate(['/viewuser', id]);
  }

  // onView(id: any){
    
  // }

}
