import { Component, OnInit } from '@angular/core';
import { ServiciosjugadoresService } from 'src/app/servicios/serviciosjugadores.service';
@Component({
  selector: 'app-maxasistentes',
  templateUrl: './maxasistentes.component.html',
  styleUrls: ['./maxasistentes.component.css']
})
export class MaxasistentesComponent implements OnInit {

  constructor(private serviciosjugadores: ServiciosjugadoresService) { }
jugadores;
  ngOnInit(): void {
    this.serviciosjugadores.maxanotadores().subscribe( datos => {
      this.jugadores = datos
      this.jugadores.sort((playerA, playerB) => playerB.Assists - playerA.Assists);
      ;});
  }

}
