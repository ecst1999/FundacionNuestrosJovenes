import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/Personas/personas.service';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {

  personas: IPersona[];
  datosObtenidos: boolean = true;
  
  constructor(private personasService: PersonasService, 
    private router: Router) { }

  ngOnInit() 
  {        
  }

  getDatos(){
    this.personasService.getPersonas()
      .subscribe(personasDesdeWS => this.personas = personasDesdeWS,
        error => console.error(error)); 
    this.datosObtenidos = false;
  }

  borrar(personaid: string){
    const eliminar = confirm('¿Esta seguro de borrar?');
    if(eliminar){
    this.personasService.deletePersona(personaid.toString())
      .subscribe(persona => this.eliminadoSuccess(),
      error => console.error(error));
    }
    if(!eliminar){
      this.router.navigate(["/personas"]);
    }
  }

  eliminadoSuccess(){
    this.router.navigate(["/personas"]);
  }
  
}
