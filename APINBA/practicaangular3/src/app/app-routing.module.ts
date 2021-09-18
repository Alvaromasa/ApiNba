import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadojugadoresComponent } from './pages/listadojugadores/listadojugadores.component';
import { MaxanotadoresComponent } from './pages/maxanotadores/maxanotadores.component';
import { MaxasistentesComponent } from './pages/maxasistentes/maxasistentes.component';
import { MaxrebotesComponent } from './pages/maxrebotes/maxrebotes.component';
import { DetallesjugadoresComponent } from './pages/detallesjugadores/detallesjugadores.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
{path: '',component:ListadojugadoresComponent},
{path: 'maxanotadores', component: MaxanotadoresComponent},
{path: 'maxasistentes', component: MaxasistentesComponent},
{path: 'maxrebotes', component: MaxrebotesComponent},
{path: 'detallesjugadores', component: DetallesjugadoresComponent},
{path: 'favoritos', component: FavoritosComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
