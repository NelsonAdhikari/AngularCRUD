import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent implements OnInit {

  userDetails: any;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getUserDetailsByUserId(res?.id);
    });
  }
  getUserDetailsByUserId(id: any) {
    this.userService.getUserDetailsByUserId(id).subscribe({
      next: (response: any) => {
        this.userDetails = response;
      }
    });
  }

  onGoback(){
    this.router.navigate(['/listuser'])
  }

}
