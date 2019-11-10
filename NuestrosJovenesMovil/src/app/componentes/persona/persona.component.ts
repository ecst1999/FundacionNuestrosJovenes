import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent implements OnInit {

  public nombre: string;
  public varia : string;
  public apellido: string;
  public cantidad: number;
  public cedula: string;
  public descripcion: string;

  constructor(private navParams: NavParams,
    private modal: ModalController) { }

  ngOnInit() {
    this.nombre = this.navParams.get('nombre');
    this.apellido = this.navParams.get('apellido');
    this.cantidad = this.navParams.get('cantidad');
    this.cedula = this.navParams.get('cedula');
    this.descripcion = this.navParams.get('descripcion');
    this.varia = "KDCM";
  }

  cerrarDetalle()
  {
    this.modal.dismiss();
  }

  editarDatos()
  {
    alert("Alerta del usuario:" + this.apellido);    
  }
}
