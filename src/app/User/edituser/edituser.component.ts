import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});
  studentDetails: any;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getUserDetailsByUserId(res?.id);
    });
  }


  getUserDetailsByUserId(id: any) {
    this.userService.getUserDetailsByUserId(id).subscribe({
      next: (response: any) => {
        this.studentDetails = response;
        this.formDetails.patchValue(response);
      }
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }


  initForm(){
    this.formDetails = this.formBuilder.group({
      username: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      email: [undefined, Validators.compose([Validators.required,Validators.minLength(4)])],
      password : [undefined, Validators.compose([Validators.required,Validators.minLength(4)])],
      contactNumber: [undefined, Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)])],
    });
  
  }

  onEditDetails(){
    this.userService.editUserDetailsByUserId(this.studentDetails.id, this.formDetails.value).subscribe(
      {
        next : (value) => {
          this.onGoback();
        },
      }
    );
  }

  onGoback() {
    this.router.navigate(['/listuser']);
  }

  



}
