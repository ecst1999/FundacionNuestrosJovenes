import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/Auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String = '';
  contra: String = '';

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.email = '';
    this.contra = '';
  }

  login()
  {
    this.authService.login(this.email, this.contra);    
    if(this.authService.isAuthenticated)
    {
      this.ngOnInit();
      this.router.navigate(['/home']);
    }
    if(!this.authService.isAuthenticated)
    {
      this.ngOnInit();
    }
  }

}
