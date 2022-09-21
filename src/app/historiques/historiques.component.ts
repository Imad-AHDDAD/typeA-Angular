import Swal from 'sweetalert2';
import { Manifestation } from './../models/manifestation';
import { ManifestationService } from './../services/manifestation.service';
import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.css']
})
export class HistoriquesComponent implements OnInit {

  manifestation = new Manifestation();
  closeResult: String = "";
  manifestations: Manifestation[];
  constructor(private service : ManifestationService , private modalService: NgbModal) { this.manifestations = [] }

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

  isAccepted(m: Manifestation){
    return m.accepted;
  }

  deleteCommand(id: number){
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
        this.service.deleteById(id).subscribe(
          data => {
            console.log("data recieved");
            console.log(data);
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              'Votre demande a été annulée !',
              'success'
            ).then(
              function(){
                location.replace('/historiques');
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


  open(content: any , index: number , id: number) {
    this.manifestation.title = this.manifestations[index].title;
    this.manifestation.place = this.manifestations[index].place;
    this.manifestation.dateStart = this.manifestations[index].dateStart;
    this.manifestation.dateEnd = this.manifestations[index].dateEnd;
    this.manifestation.timeEnd = this.manifestations[index].timeEnd;
    this.manifestation.timeStart = this.manifestations[index].timeStart;
    this.manifestation.amount = this.manifestations[index].amount;
    this.manifestation.accepted = this.manifestations[index].accepted;
    this.manifestation.id = this.manifestations[index].id;
    this.manifestation.username = this.manifestations[index].username;
    this.manifestation.dateRequest = this.manifestations[index].dateRequest;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  modify(){
    console.log('modify button clicked !');
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Êtes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.update(this.manifestation , this.manifestation.id).subscribe(
          data => {
            console.log(data);
            if(data.token == 'updated'){
              swalWithBootstrapButtons.fire(
                'Modifiée!',
                'Votre demande a été modifiée !',
                'success'
              ).then(
                function(){
                  location.replace('/historiques');
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
          'Vous avez annulé la modification !',
          'error'
        );
      }
    })
  }

  print(id: number){
    this.service.printPdf(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


}
