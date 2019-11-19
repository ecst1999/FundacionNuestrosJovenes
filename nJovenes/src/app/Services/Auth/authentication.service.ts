import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiWeb = 'http://10.10.1.34:8080/';

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, 
    private pl: Platform,
    private http: HttpClient) { 
      this.pl.ready().then(() =>{
        this.checkToken();
      })
    }

    checkToken() {
      this.storage.get(TOKEN_KEY).then(res => {
        if (res) {
          this.authenticationState.next(true);
        }
      });
    }

    public login(email: String, contra: String): Promise<any> {
      const data = {email: email, contra: contra};
      return new Promise((resolve, reject) => {
        this.http.post(this.apiWeb+ 'login' , data).subscribe(
          response => {
            resolve(response);
            var token_obtenido = response['token'];
            return this.storage.set(TOKEN_KEY, token_obtenido).then(() => {
              this.authenticationState.next(true);
             });
          },
          exeption => {
            reject(exeption);
          }
        );
      });
    }
    public registro(nombre: String, email: String, contra: string): Promise<any>
    {
      const data = { nombre: nombre, email: email, contra: contra };
      return new Promise((resolve, reject) => {
        this.http.post(this.apiWeb + 'registro', data).subscribe(
          response => {
            resolve(response);
          },
          exeption => {
            reject(exeption);
          }
        )
      });
    }

    logout()
    {
      return this.storage.remove(TOKEN_KEY).then(()=>{
        this.authenticationState.next(false);
      });
    }

    isAuthenticated() {
      return this.authenticationState.value;
    }
}