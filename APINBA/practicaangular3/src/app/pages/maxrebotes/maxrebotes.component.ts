import { Component, OnInit } from '@angular/core';
import { ServiciosjugadoresService } from 'src/app/servicios/serviciosjugadores.service';
@Component({
  selector: 'app-maxrebotes',
  templateUrl: './maxrebotes.component.html',
  styleUrls: ['./maxrebotes.component.css']
})
export class MaxrebotesComponent implements OnInit {
jugadores;
  constructor(private serviciosjugadores: ServiciosjugadoresService) { }

  ngOnInit(): void {
    this.serviciosjugadores.maxanotadores().subscribe( datos => {
      this.jugadores = datos
      this.jugadores.sort((playerA, playerB) => playerB.Rebounds - playerA.Rebounds);
      ;});
  }

}
