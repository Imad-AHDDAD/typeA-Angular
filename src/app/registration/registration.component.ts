import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  errorMessage = '';
  successMessage = '';
  constructor(private service : UserService , private router : Router) { }

  ngOnInit(): void {
  }

  register(){

    this.service.registerUser(this.user).subscribe(
      data => {
        console.log("response received");
        // this.router.navigate(['/loggedin']);
        this.successMessage="Veuillez cliquer sur le lien envoyé à "+this.user.email+" pour vérifier votre inscription";
        this.errorMessage="";

      },
      error => {
        console.log("exception");
        this.successMessage="";
        this.errorMessage="une erreur s'est produite !";

      }
    );
  }

}





