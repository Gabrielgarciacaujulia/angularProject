import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { MascotasListarComponent } from "./mascotas/mascotas-listar/mascotas-listar.component";
import { MascotaAgregarComponent } from "./mascotas/mascota-agregar/mascota-agregar.component";
import { MascotasEditarComponent } from "./mascotas/mascotas-editar/mascotas-editar.component";
import { AdoptarMascotaComponent } from "./mascotas/adoptar-mascota/adoptar-mascota.component";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConsejosAdopcionComponent } from './mascotas/consejos-adopcion/consejos-adopcion.component';

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "mascotas-listar", component: MascotasListarComponent },
  { path: "mascota-agregar", component: MascotaAgregarComponent },
  { path: "mascota-editar/:id", component: MascotasEditarComponent},
  { path: "adoptar-mascota", component:AdoptarMascotaComponent },
  { path: "consejos-adopcion", component: ConsejosAdopcionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AngularFontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
