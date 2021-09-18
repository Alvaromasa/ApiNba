import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ServiciosjugadoresService } from 'src/app/servicios/serviciosjugadores.service';

@Component({
  selector: 'app-listadojugadores',
  templateUrl: './listadojugadores.component.html',
  styleUrls: ['./listadojugadores.component.css']
})
export class ListadojugadoresComponent implements OnInit {

  constructor(private serviciosjugadores: ServiciosjugadoresService) { }

   jugadores;

  ngOnInit(): void {
    
   this.serviciosjugadores.devolverjugadores().subscribe( datos => { console.log(datos);
    this.jugadores = datos;});
  }

}
