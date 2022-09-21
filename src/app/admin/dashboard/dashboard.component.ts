import { Manifestation } from './../../models/manifestation';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service : AdminService) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.adminLogout();
    location.reload();
  }

}
