import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { PersonasService } from '../Servicios/personas.service';
import { IPersonas } from '../Interfaces/IPersonas';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public Personas: any = [];


  constructor(private authService: AuthService,
    public personasService: PersonasService,
    private modal: ModalController) {}

  CerrarSesion()
  {
    this.authService.logout();
  }

  ngOnInit()
  {
    
  }
  
  getDatos()
  {
    this.personasService.getPersonas().subscribe(personas => {
      personas.map(persona =>{
        this.Personas = personas;        
      })
    });
  }

  abrirDetalle(persona)
  {
    this.modal.create({
      component:
    });
  }
}
