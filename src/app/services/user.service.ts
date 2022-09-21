import { CustomUserDetails } from './../models/custom-user-details';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public loginUser(user : User) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/user/login" , user);
  }

  public registerUser(user : User) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/user/register" , user);
  }

  // setToken method :
  public setToken(token: string) {
    localStorage.setItem("token",token);
    return true;
  }

  // isLoggedIn method
  public isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token === "" || token == null){
      return false;
    }else{
      return true;
    }
  }

  // isLoggedIn method
  public logout(){
    localStorage.removeItem("token");
    return true;
  }

  // to get token
  public getToken(){
    return localStorage.getItem("token");
  }

  // to get username logged in
  public getUsername(): Observable<any>{
    let t = localStorage.getItem("token");
    let url = "http://localhost:8080/user/extractClaim/"+t;
    return this.http.get<any>(url);
  }

  // to know if the user' informations are completed
  public infosAreCompleted(): Observable<any>{
    let t = localStorage.getItem("token");
    let url = "http://localhost:8080/user/a_rempli/"+t;
    return this.http.get<any>(url);
  }

  // test if infos are completed
  public testIfInfosAreCompleted(){
    this.infosAreCompleted().subscribe(
      data => {
        if(data === true || data === "true"){
          localStorage.setItem("completed" , "true");
        }else{
          localStorage.setItem("completed" , "false");
        }
      }
    );
  }

  // areCompleted
  public areCompleted(){
    if(localStorage.getItem('completed') == 'true'){
      return true;
    }else{
      return false;
    }
  }


  // comlete informations method
  public completeInfos(details : CustomUserDetails) : Observable<any>{
    let token = localStorage.getItem("token");
    let url = "http://localhost:8080/user/completeInfos/"+token;
    return this.http.post<any>(url , details);
  }


}
