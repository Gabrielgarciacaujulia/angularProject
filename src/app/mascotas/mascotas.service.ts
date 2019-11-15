import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mascota } from "./mascota";
import { Router } from "@angular/router"

@Injectable({
  providedIn: "root"
})
export class MascotasService {

  baseUrl: String = "http://localhost:8090/mascotas";

  public mascotas: Array<Mascota> = [];
  
  constructor(private httpClient: HttpClient, private router:Router) {}

  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
  }
  
  public addMascota(mascota:Mascota){
    return this.httpClient.post<Mascota>(`${this.baseUrl}`,mascota).subscribe(data => {
      this.router.navigate(['/mascotas-agregar'])
    });
  }

 

  

}
