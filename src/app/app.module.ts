import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MascotaAgregarComponent } from './mascotas/mascota-agregar/mascota-agregar.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MascotasService } from './mascotas/mascotas.service';
import { MascotasEditarComponent } from './mascotas/mascotas-editar/mascotas-editar.component';
import { AdoptarMascotaComponent } from './mascotas/adoptar-mascota/adoptar-mascota.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MascotasListarComponent,
    MascotaAgregarComponent,
    MascotasEditarComponent,
    AdoptarMascotaComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
