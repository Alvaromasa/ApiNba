import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/modelos/jugadores.model';
import { ServiciosfavoritosService } from 'src/app/servicios/serviciosfavoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  listajugadores: Jugadores[];
  constructor(private serviciosfavoritos: ServiciosfavoritosService) { }

  ngOnInit(): void {
   
    this.serviciosfavoritos.obtenerJugadores().subscribe(Jugadores => {this.listajugadores = Jugadores.data
       
      
      
       });
    
 

}

}
