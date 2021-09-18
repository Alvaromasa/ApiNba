import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Jugadores} from '../modelos/jugadores.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiciosfavoritosService {

  listajugadores: Jugadores[];

  constructor(private http: HttpClient) { }
url = "https://nba-two.vercel.app/api/favoritos";


obtenerJugadores(): Observable<any>{



  // return this.firestore.collection('jugadores').snapshotChanges()

  return this.http.get(this.url);
}







}
 