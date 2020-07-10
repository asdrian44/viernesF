import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../../shared/models/loginModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResponseModels} from '../../shared/models/responseModels';
import {AuthModel} from '../../shared/models/authModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  login(login: LoginModel): Observable<any> {

    return this.http.post(this.url + 'login', login).pipe(map((value:ResponseModels)=>{
      this.guardarToken(value.token);
    }));
  }

  registrar(reg:AuthModel):Observable<any>{

    return  this.http.post(this.url+'register',reg).pipe(map((value:ResponseModels)=>value));
  }


  guardarToken(token){

    localStorage.setItem("token",'Bearer '+token);
  }
}
