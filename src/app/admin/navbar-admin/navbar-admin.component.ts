import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  isLoggedIn = false;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.adminService.adminIsLoggedIn();
  }

  public logoutAdmin(){
    this.adminService.adminLogout();
    location.reload();
  }

}
