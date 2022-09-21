import { Router } from '@angular/router';
import { ManifestationService } from './../services/manifestation.service';
import { Manifestation } from './../models/manifestation';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import swalWithBootstrapButtons from 'sweetalert2';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  manifestation = new Manifestation();
  constructor(private service : ManifestationService , private route : Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.service.saveManifestation(this.manifestation).subscribe(
      data => {
        console.log("data received");
        console.log(data);
        swalWithBootstrapButtons.fire(
          'Envoyé !',
          'Votre demande a été envoyée avec succes !',
          'success'
        ).then(function(){
             location.replace('/historiques');
           });

      },
      error => {
        console.log("data received");
        console.log(error.error.message);
      }
    );
  }

}
