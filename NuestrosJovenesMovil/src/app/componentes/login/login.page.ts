import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  Login()
  {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario volver a intentar'));
  }

}
