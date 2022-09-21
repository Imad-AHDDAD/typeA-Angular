export class Manifestation {
  id: number;
  title: string;
  place: string;
  dateStart: string;
  dateEnd: string;
  timeStart: string;
  timeEnd: string;
  amount: number;
  accepted: boolean;
  dateRequest : string;
  username: string;

  constructor(){
    this.id = 0;
    this.title = "";
    this.place = "";
    this.dateStart = "";
    this.dateEnd = "";
    this.timeStart = "";
    this.timeEnd = "";
    this.amount = 0;
    this.accepted = false;
    this.dateRequest = "";
    this.username = "";
  }
}
