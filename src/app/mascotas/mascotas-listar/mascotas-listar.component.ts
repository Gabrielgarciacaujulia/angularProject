import { Component, OnInit } from "@angular/core";
import { MascotasService } from "../mascotas.service";
import { Mascota } from "src/app/mascotas/mascota";
import { Router } from "@angular/router";

@Component({
  selector: "app-mascotas-listar",
  templateUrl: "./mascotas-listar.component.html",
  styleUrls: ["./mascotas-listar.component.css"]
})

export class MascotasListarComponent implements OnInit {
  public mascotas: Array<Mascota> = [];
  constructor(private mascotasService: MascotasService) {}

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }
  private router: Router;

  public delete(id: number) {
    let index = this.mascotas.findIndex(mascota => mascota.id === id);
    this.mascotas.splice(index, 1);
    this.mascotasService
      .deleteMascota(id)
      .subscribe(deleted => this.router.navigateByUrl("/mascotas-listar"));
  }
}
