import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/Personas/personas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPersona } from 'src/app/Interfaces/IPersona';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.page.html',
  styleUrls: ['./personas-form.page.scss'],
})
export class PersonasFormPage implements OnInit {

  constructor(private personasService: PersonasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  personaId: number;
  nombre: string = '';
  apellido: string = '';
  cedula: string = '';
  cantidad: string = '';
  descripcion: string = '';
  fecha: Date;
  firma: string = '';
  personasForm = {}
  modoEdicion: boolean = false;

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;

      this.personaId = params["id"];

      this.personasService.getPersona(this.personaId.toString())
        .subscribe(persona => this.cargarFormulario(persona),
          error => console.error(error));
    });
  }

  cargarFormulario(persona: IPersona)
  {    
    this.personasForm = {nombre : persona.nombre, apellido: persona.apellido, cedula: persona.cedula, cantidad: persona.cantidad, descripcion: persona.descripcion, fecha: persona.fecha, firma: persona.firma}
  }

  registrar()
  {
    let persona : IPersona = Object.assign(this.personasForm);

    if(this.modoEdicion)
    {
      persona.id = this.personaId;
      this.personasService.updatePersona(persona)
        .subscribe(persona => this.onSaveSuccess(),
        error => console.error(error));
    }
    else
    {    
    this.personasService.createPersona(persona)
      .subscribe(personaWs => this.onSaveSuccess(),
        error => console.error(error));
    this.router.navigate(["/personas"]);
    }
  }

  onSaveSuccess() {
    this.router.navigate(["/personas"]);
  }

}
