import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

formDetails: FormGroup = new FormGroup({})
submitted: boolean = false;
user = new User();
isSubmitting: boolean = false;



  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }

  onSubmit(formDetails: any){
    this.submitted=true;

    if(this.formDetails.invalid){
      return;
    }

    console.log("The value after submit the form", this.formDetails.value);

    this.user.username = formDetails.username;
    this.user.email = formDetails.email;
    this.user.contactNumber = formDetails.contactNumber;

    if(this.formDetails.valid){
      this.addUser(this.user)
    }

    // this.formDetails.reset();
    // this.location.back();
    
  }

  addUser(user: any){
    this.userService.onAddUser(user).subscribe(
      (response:any)=>{
        this.isSubmitting=true;
      
        // this.router.navigate(['auth/login'])
        console.log("Data insert success");
      },
      (error:any)=>{
        // this.isSubmitting=false;
        console.error("Error to insert data");
      }
    );
  }

  initForm(){
    this.formDetails = this.formBuilder.group({
      username: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      email: [undefined, Validators.compose([Validators.required,Validators.minLength(4)])],
      password : [undefined, Validators.compose([Validators.required,Validators.minLength(4)])],
      contactNumber: [undefined, Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)])],
    });
  }

}