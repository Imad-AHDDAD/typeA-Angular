
import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infosCompleted = false;

  constructor(private service : UserService ) { }

  ngOnInit(): void {
    this.a_rempli();
  }


  a_rempli(){
    this.service.infosAreCompleted().subscribe(
      data => {
          this.infosCompleted = data;
      },
      error => {
        console.log("error a remplit");
        this.infosCompleted = false;
      }
    );
  }


}
