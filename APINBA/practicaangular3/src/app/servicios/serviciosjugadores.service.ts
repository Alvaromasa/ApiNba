import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosjugadoresService {

  
constructor(private firestore: AngularFirestore, private http: HttpClient ){ }

devolverjugadores(){

 return this.http.get('https://fly.sportsdata.io/v3/nba/scores/json/Players?key=be73fc8a8e154aff859a13c4f3a854cf');
}
maxanotadores(){
  
  return this.http.get('https://fly.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2021?key=be73fc8a8e154aff859a13c4f3a854cf');
  
}









}
