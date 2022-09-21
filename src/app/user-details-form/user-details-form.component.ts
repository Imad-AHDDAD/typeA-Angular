import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { CustomUserDetails } from './../models/custom-user-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {

  customUserDetails = new CustomUserDetails();
  message = '';
  classMessage = '';
  constructor(private service : UserService , private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if (this.customUserDetails.grade != '' && this.customUserDetails.salary != 0 && this.customUserDetails.etablissement != '' && this.customUserDetails.departement != '' && this.customUserDetails.gender != '' && this.customUserDetails.address != '') {

      this.service.completeInfos(this.customUserDetails).subscribe(
        data => {
          if(!data){
            console.log("exception");
            this.classMessage = 'text-danger';
            this.message = 'merci de saisir toutes les informations !!';
          }else{
            console.log("response received");
            console.log(data);
            this.message = "vos informations sont enregistrées avec succes";
            this.classMessage = 'text-success';
            location.replace('/home');
          }
        },
        error => {
          console.log("exception");
          this.message = error.error.message;
          this.classMessage = 'text-danger';
          console.log(error);
        }
      );


    }else{
      this.message = "merci de saisir toutes les informations !!"
    }

  }

}
