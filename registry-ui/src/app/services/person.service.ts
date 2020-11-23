import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable(
{ providedIn: 'root' }
)
export class PersonService {

  constructor(private http:HttpClient) { }
  getPeople() {
    return this.http.get('/server/api/v1/people');
  }

  getPerson(id: number) {
    return this.http.get('/server/api/v1/people/' + id);
  }
  createPersonRegistration(person){
    let body = JSON.stringify(person);
    return this.http.post('/server/api/v1/people', body, httpOptions)
  }

}
