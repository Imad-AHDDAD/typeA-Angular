import { Manifestation } from './../models/manifestation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './../models/admin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  loginAdmin(admin : Admin) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/admin/login" , admin);
  }

  public setToken(token : string){
    localStorage.setItem("tokenAdmin" , token);
    return true;
  }

  // isLoggedIn method
  public adminIsLoggedIn(){
    let tokenAdmin = localStorage.getItem("tokenAdmin");
    if(tokenAdmin == undefined || tokenAdmin === "" || tokenAdmin == null){
      return false;
    }else{
      return true;
    }
  }

  // isLoggedIn method
  public adminLogout(){
    localStorage.removeItem("tokenAdmin");
    return true;
  }

  // to get token
  public getAdminToken(){
    return localStorage.getItem("tokenAdmin");
  }

  public getAll(): Observable<Manifestation[]> {
    let url = "http://localhost:8080/admin/getManifestations";
    return this.http.get<Manifestation[]>(url);
  }

  public acceptRequest(id: number) : Observable<any>{
    let url = "http://localhost:8080/admin/acceptRequest/"+id;
    return this.http.get<any>(url);
  }


}
