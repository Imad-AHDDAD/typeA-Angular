import { AdminService } from './../../services/admin.service';
import { Admin } from './../../models/admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  admin = new Admin();
  message = '';
  constructor(private service : AdminService ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if (this.admin.username != '' && this.admin.password != '') {
      this.service.loginAdmin(this.admin).subscribe(
        data => {
          if(!data){
            console.log("exception");
            this.message = 'merci de saisir un email et un mot de passe valides !';
          }else{
            console.log(data.token);
            this.service.setToken(data.token);
            location.replace('ad/dsb');
          }

        },
        error => {
          console.log("exception");
          this.message = error.error.message;
          console.log(error);

        }
      );
    }else{
      this.message = "email ou mot de passe vide !!"
    }

  }

}
