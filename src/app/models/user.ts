

export class User {

  Id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;

  // constructor(Id: number ,firstName: string ,lastName: string ,email: string ,phoneNumber: string ,password: string){
  //   this.Id = Id;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.phoneNumber = phoneNumber;
  //   this.password = password;
  // }

  constructor(){
    this.Id = 0;
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phoneNumber = "";
    this.password = "";
  }
}
