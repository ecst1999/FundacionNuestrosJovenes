import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { PersonasService } from '../Servicios/personas.service';
import { IPersonas } from '../Interfaces/IPersonas';
import { ModalController } from '@ionic/angular';
import { PersonaComponent } from '../componentes/persona/persona.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public Personas: any = [];
  public OcultarBoton: boolean = false;


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
    this.OcultarBoton = true;
  }

  abrirDetalle(persona)
  {
    this.modal.create({
      component: PersonaComponent,
      componentProps: {
        nombre: persona.nombre,
        apellido: persona.apellido,
        cantidad: persona.cantidad,
        cedula: persona.cedula,
        descripcion: persona.descripcion
      }
    }).then((modal) => modal.present()) ;
  }
}
