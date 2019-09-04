import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/Personas/personas.service';
import { IPersona } from 'src/app/Interfaces/IPersona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {

  personas: IPersona[];
  datosObtenidos: boolean = true;
  
  constructor(private personasService: PersonasService) { }

  ngOnInit() 
  {        
  }

  getDatos(){    
    this.personasService.getPersonas()
      .subscribe(personasDesdeWS => this.personas = personasDesdeWS,
        error => console.error(error)); 
    this.datosObtenidos = false;    
  }

}
