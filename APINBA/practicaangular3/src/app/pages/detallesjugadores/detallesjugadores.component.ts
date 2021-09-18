import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ServiciosjugadoresService } from 'src/app/servicios/serviciosjugadores.service';
@Component({
  selector: 'app-detallesjugadores',
  templateUrl: './detallesjugadores.component.html',
  styleUrls: ['./detallesjugadores.component.css']
})
export class DetallesjugadoresComponent implements OnInit {
 jugadores= [];
  constructor(private serviciosjugadores: ServiciosjugadoresService) { }

  ngOnInit(): void {
    this.serviciosjugadores.devolverjugadores().subscribe( datos => { console.log(datos);
      this.jugadores[0] = datos;});
  }

}
