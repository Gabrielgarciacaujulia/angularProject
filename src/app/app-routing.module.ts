import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { MascotaAgregarComponent } from './mascotas/mascota-agregar/mascota-agregar.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path:'mascotas-listar', component:MascotasListarComponent},
  {path:'mascota-agregar', component:MascotaAgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
