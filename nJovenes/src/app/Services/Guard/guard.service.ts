import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../Auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(public auth: AuthenticationService ) { }

  canActivate():boolean {
    return this.auth.isAuthenticated();
  }
}
