import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class StatusService {

  url = 'https://9d2fbccd6e6a.ngrok.io/';

  constructor(private http:HttpClient) {
    this.header=this.header.set("Authorization", localStorage.getItem('token'));
  }
  private header = new HttpHeaders();







}
