import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosjugadoresService } from 'src/app/servicios/serviciosjugadores.service';

@Component({
  selector: 'app-maxanotadores',
  templateUrl: './maxanotadores.component.html',
  styleUrls: ['./maxanotadores.component.css']
})
export class MaxanotadoresComponent implements OnInit {

  constructor(private serviciosjugadores: ServiciosjugadoresService) { }
   jugadores;
   
  ngOnInit(): void {
    this.serviciosjugadores.maxanotadores().subscribe( datos => {
      this.jugadores = datos
      this.jugadores.sort((playerA, playerB) => playerB.Points - playerA.Points);
      ;});
  }

}
 