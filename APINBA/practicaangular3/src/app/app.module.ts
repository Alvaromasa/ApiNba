import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './componente/menuprincipal/menuprincipal.component';
import { ListadojugadoresComponent } from './pages/listadojugadores/listadojugadores.component';
import { MaxanotadoresComponent } from './pages/maxanotadores/maxanotadores.component';
import { MaxasistentesComponent } from './pages/maxasistentes/maxasistentes.component';
import { MaxrebotesComponent } from './pages/maxrebotes/maxrebotes.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { DetallesjugadoresComponent } from './pages/detallesjugadores/detallesjugadores.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    ListadojugadoresComponent,
    MaxanotadoresComponent,
    MaxasistentesComponent,
    MaxrebotesComponent,
    FavoritosComponent,
    DetallesjugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
