export class CustomUserDetails {

  Id: number;
  username: string;
  gender: string;
  grade: string;
  salary: number;
  etablissement: string;
  departement: string;
  address: string;


  constructor(){
    this.Id = 0;
    this.username = "";
    this.gender = "";
    this.grade = "";
    this.salary = 0;
    this.etablissement = "";
    this.departement = "";
    this.address = "";
  }

}
