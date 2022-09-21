import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  message = '';
  constructor(private service : UserService , private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if (this.user.email != '' && this.user.password != '') {
      this.service.loginUser(this.user).subscribe(
        data => {
          if(!data){
            console.log("exception");
            this.message = 'merci de saisir un email et un mot de passe valides !';
          }else{
            // console.log("response received");
            // console.log(data.token);
            this.service.setToken(data.token);
            // this.router.navigate(['/home']);
            location.replace('/home');
          }

        },
        error => {
          console.log("exception");
          this.message = error.error.message;
          // this.message = 'merci de saisir un email et un mot de passe valides !';
          console.log(error);

        }
      );
    }else{
      this.message = "email ou mot de passe vide !!"
    }

  }

  logout(){
    this.service.logout();
  }

}
