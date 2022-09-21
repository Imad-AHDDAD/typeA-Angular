import { AdminService } from './../services/admin.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  adminIsLoggedIn = false;
  username = "";

  constructor(private service : UserService , private adminService : AdminService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.service.isLoggedIn();
    this.adminIsLoggedIn = this.adminService.adminIsLoggedIn();
    this.getUsername();
  }

  logoutUser(){
    this.service.logout();
    location.reload();
  }

  getUsername(){
    this.service.getUsername().subscribe(
      data => {
        if(!data){
          console.log("exception username");
          this.isLoggedIn = false;
          this.username = '';
          this.service.logout();
        }else{
          this.isLoggedIn = true;
          this.username = data.sub;
        }

      },
      error => {
        console.log("exception username");
        this.username = '';
        this.isLoggedIn = false;
        this.service.logout();
      }
    );
  }



}
