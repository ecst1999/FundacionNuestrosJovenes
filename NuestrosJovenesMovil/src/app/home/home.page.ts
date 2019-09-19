import { Component } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService) {}

  CerrarSesion()
  {
    this.authService.logout();
  }
}
