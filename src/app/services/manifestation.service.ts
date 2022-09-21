import { Observable } from 'rxjs';
import { Manifestation } from './../models/manifestation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManifestationService {

  constructor(private http: HttpClient) { }

  public saveManifestation(m: Manifestation) : Observable<any>{
    let token = localStorage.getItem("token");
    let url = "http://localhost:8080/manifestation/save/"+token;
    return this.http.post<any>(url , m);
  }

  public getAll(): Observable<Manifestation[]> {
    let token = localStorage.getItem("token");
    let url = "http://localhost:8080/manifestation/all/"+token;
    return this.http.get<Manifestation[]>(url);
  }

  public deleteById(id: number): Observable<any>{
    let url = "http://localhost:8080/manifestation/delete/"+id;
    return this.http.delete<any>(url);
  }

  public update(m: Manifestation , id: number): Observable<any>{
    let url = "http://localhost:8080/manifestation/update/"+id;
    return this.http.put<any>(url , m);
  }

  public printPdf(id : number): Observable<any>{
    let url = "http://localhost:8080/manifestation/pdf/"+id;
    return this.http.get<any>(url);
  }

}
