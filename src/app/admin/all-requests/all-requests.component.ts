import { ManifestationService } from './../../services/manifestation.service';
import Swal from 'sweetalert2';
import { Manifestation } from 'src/app/models/manifestation';
import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {

  manifestation = new Manifestation();
  manifestations: Manifestation[] = [];
  constructor(private service : AdminService ,private mService : ManifestationService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      data => {
        console.log("response received");
        this.manifestations = data;
        console.log(this.manifestations);
      },
      error => {
        console.log("error occured !!");
      }
    )
  }

  acceptRequest(id: number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Êtes-vous sûr?',
      text: "Accepter cette demande ? !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.service.acceptRequest(id).subscribe(
          data => {
            console.log("data recieved");
            console.log(data);
            if(data.tpken == "accepted"){

              swalWithBootstrapButtons.fire(
                'Acceptée!',
                'la demande a été acceptée !',
                'success'
              ).then(
                function(){
                  location.replace('/ad/allRqsts');
                }
              );

            }else{
              swalWithBootstrapButtons.fire(
                'Erreur',
                'une erreur au niveau de la base de données !!',
                'error'
              );
            }

          },
          error => {
            console.log(error);
            swalWithBootstrapButtons.fire(
              'Erreur',
              'une erreur au niveau de la base de données !!',
              'error'
            );
          }
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'Vous avez annulé l operation !',
          'error'
        );
      }
    });
  }

  deleteRequest(id: number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.mService.deleteById(id).subscribe(
          data => {
            console.log("data recieved");
            console.log(data);
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              'Votre demande a été annulée !',
              'success'
            ).then(
              function(){
                location.replace('/ad/allRqsts');
              }
            );

          },
          error => {
            console.log(error);
            swalWithBootstrapButtons.fire(
              'Erreur',
              'une erreur au niveau de la base de données !!',
              'error'
            );
          }
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'Vous avez annulé la suppression !',
          'error'
        );
      }
    });
  }

  isAccepted(m: Manifestation){
    return m.accepted;
  }

}
